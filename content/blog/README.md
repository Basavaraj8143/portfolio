# Writing blog articles

Articles live in this folder as `.mdx` files. The blog discovers them automatically; no React component edits are needed for new posts.

## Create an article

1. Copy the template below to a new file such as `my-article-slug.mdx`.
2. Use a unique lowercase, hyphen-separated `slug`. It becomes `/blog/<slug>`.
3. Add a thumbnail image under `public/blog/` and set `thumbnail` to its site path, for example `/blog/my-article.svg`. Use a consistent 16:10 image ratio. If the file is absent, the site uses `/blog/default-cover.svg` until you add it.
4. Write the article body in Markdown/MDX. Headings, paragraphs, lists, links, images, blockquotes, and fenced code blocks are supported. Add a language after the opening code fence for syntax highlighting, such as ```` ```ts ````.
5. Keep `published: false` while drafting. Drafts do not appear in the listing, sitemap, or direct article routes. Set it to `true` when ready to publish.

`readingTime` must stay set to `auto`; the site estimates it from the article text. The date must be a real calendar date in `YYYY-MM-DD` format. The build reports missing/invalid metadata and duplicate slugs.

## Reusable MDX template

````mdx
---
title: "A clear article title"
description: "A short summary used in the listing and search previews."
date: "2026-10-13"
slug: "a-clear-article-title"
thumbnail: "/blog/a-clear-article-title.svg"
tags:
  - TypeScript
  - Backend
category: "Backend development"
published: false
readingTime: auto
---

Start with an introduction that summarizes the article.

## A section heading

Write paragraphs in Markdown. Add [useful links](https://example.com) where they help.

> A short quotation or callout.

- A list item
- Another list item

![Describe the article image](/blog/diagram.svg)

```ts
type Article = {
  title: string;
  published: boolean;
};
```
````

## Preview and publish

From the repository root, run `npm run dev` and open `http://localhost:3000/blog`. Open the article directly at `http://localhost:3000/blog/<slug>` to check the full page. When it is ready, change `published` to `true`, run `npm run build`, then commit and push the `.mdx` file and its thumbnail to GitHub. The deployment will include the new listing card, article route, canonical metadata, and sitemap entry.
