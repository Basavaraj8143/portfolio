import Link from "next/link";
import type { BlogArticle } from "../blog-content";
import { formatArticleDate } from "../blog-content";
import { BlogCover } from "./blog-cover";

export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      <BlogCover article={article} />
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{article.category}</p>
        <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight">{article.title}</h2>
        <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">{article.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology and topic tags">
          {article.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">{tag}</li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
