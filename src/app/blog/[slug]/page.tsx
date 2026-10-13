import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteData } from "@/lib/site-data";
import { getPublishedArticle, getPublishedArticles } from "../blog-content";
import { ArticleContent } from "../_components/article-content";
import { ArticlePage } from "../_components/article-page";

type ArticleRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) {
    return { title: "Article not found | Blog", robots: { index: false, follow: false } };
  }

  const canonicalUrl = `${siteData.url}/blog/${article.slug}`;
  return {
    title: `${article.title} | Blog`,
    description: article.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: article.title,
      description: article.description,
      publishedTime: `${article.date}T00:00:00.000Z`,
      tags: article.tags,
      images: [{ url: article.thumbnail, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.thumbnail],
    },
  };
}

export default async function BlogArticleRoute({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) notFound();

  return <ArticlePage article={article} content={<ArticleContent source={article.source} />} />;
}
