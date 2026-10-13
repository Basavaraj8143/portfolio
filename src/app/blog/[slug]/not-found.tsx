import Link from "next/link";

export default function BlogArticleNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24 text-foreground">
      <section className="w-full max-w-xl text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">404 · Blog</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Article not found.</h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground">That article may have moved, or its address may be incorrect.</p>
        <Link href="/blog" className="mt-8 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted">Back to blog</Link>
      </section>
    </main>
  );
}
