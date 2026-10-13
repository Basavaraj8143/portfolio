import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  thumbnail: string;
  published: boolean;
  readingTime: string;
  source: string;
};

const contentDirectory = path.join(process.cwd(), "content", "blog");
const fallbackThumbnail = "/blog/default-cover.svg";
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(file: string, message: string): never {
  throw new Error(`Invalid blog post "${file}": ${message}`);
}

function requiredText(data: Record<string, unknown>, key: string, file: string) {
  const value = data[key];
  if (typeof value !== "string" || !value.trim()) fail(file, `"${key}" must be a non-empty string.`);
  return value.trim();
}

function estimateReadingTime(source: string) {
  const words = source
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function validatePost(file: string): BlogArticle {
  const fullPath = path.join(contentDirectory, file);
  const parsed = matter(fs.readFileSync(fullPath, "utf8"));
  const data = parsed.data as Record<string, unknown>;
  const title = requiredText(data, "title", file);
  const description = requiredText(data, "description", file);
  const category = requiredText(data, "category", file);
  const slug = requiredText(data, "slug", file);
  const readingTimeSetting = requiredText(data, "readingTime", file);
  if (readingTimeSetting !== "auto") fail(file, '"readingTime" must be "auto"; reading time is calculated from the article body.');
  if (!slugPattern.test(slug)) fail(file, '"slug" must contain lowercase letters, numbers, and single hyphens only.');
  const date = requiredText(data, "date", file);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`)) || new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date) {
    fail(file, '"date" must be a valid calendar date in YYYY-MM-DD format.');
  }
  if (!Array.isArray(data.tags) || data.tags.length === 0 || !data.tags.every((tag) => typeof tag === "string" && tag.trim())) {
    fail(file, '"tags" must be a non-empty list of strings.');
  }
  if (typeof data.published !== "boolean") fail(file, '"published" must be true or false.');

  const thumbnailInput = requiredText(data, "thumbnail", file);
  const thumbnail = thumbnailInput.startsWith("/") && !thumbnailInput.startsWith("//") && !thumbnailInput.split("/").includes("..")
    ? thumbnailInput
    : fallbackThumbnail;
  const imagePath = path.join(process.cwd(), "public", thumbnail.replace(/^\//, ""));
  const safeImagePath = path.resolve(imagePath);
  const publicRoot = path.resolve(process.cwd(), "public") + path.sep;
  const resolvedThumbnail = fs.existsSync(safeImagePath) && safeImagePath.startsWith(publicRoot)
    ? thumbnail
    : fallbackThumbnail;

  return {
    slug,
    category,
    title,
    description,
    tags: (data.tags as string[]).map((tag) => tag.trim()),
    date,
    thumbnail: resolvedThumbnail,
    published: data.published,
    readingTime: estimateReadingTime(parsed.content),
    source: parsed.content.trim(),
  };
}

export function getAllArticles(): BlogArticle[] {
  if (!fs.existsSync(contentDirectory)) return [];
  const files = fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".mdx")).sort();
  const articles = files.map(validatePost);
  const seen = new Set<string>();
  for (const article of articles) {
    if (seen.has(article.slug)) throw new Error(`Duplicate blog slug "${article.slug}". Each MDX file must have a unique slug.`);
    seen.add(article.slug);
  }
  return articles;
}

export function getPublishedArticles() {
  return getAllArticles()
    .filter((article) => article.published)
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function getPublishedArticle(slug: string) {
  return getPublishedArticles().find((article) => article.slug === slug);
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
