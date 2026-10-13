import type { Metadata } from "next";
import { getPublishedArticles } from "./blog-content";
import { BlogCard } from "./_components/blog-card";

export const metadata: Metadata = {
  title: "Blog | Basavaraj Ningasani",
  description: "A space for notes and article ideas on software engineering.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-24 text-foreground sm:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">Blog</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">A space for ideas.</h1>
        </header>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {getPublishedArticles().map((article) => <BlogCard key={article.slug} article={article} />)}
        </div>
      </section>
    </main>
  );
}
