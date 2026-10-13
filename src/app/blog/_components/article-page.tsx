import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogArticle } from "../blog-content";
import { formatArticleDate } from "../blog-content";
import { BlogCover } from "./blog-cover";

export function ArticlePage({ article, content }: { article: BlogArticle; content: ReactNode }) {
  return (
    <main className="min-h-screen px-6 py-12 text-foreground sm:px-8 sm:py-16">
      <article className="mx-auto w-full max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
          <span aria-hidden="true">←</span> Back to blog
        </Link>
        <header className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{article.category}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{article.title}</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{article.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology and topic tags">
              {article.tags.map((tag) => <li key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{tag}</li>)}
            </ul>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-border">
            <BlogCover article={article} />
          </div>
        </header>

        {content}
      </article>
    </main>
  );
}
