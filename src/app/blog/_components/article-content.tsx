import type { ComponentProps, ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import styles from "./article-content.module.css";

const components = {
  h1: ({ children }: { children?: ReactNode }) => <h1 className="mb-5 mt-10 text-3xl font-semibold tracking-tight text-foreground">{children}</h1>,
  h2: ({ children }: { children?: ReactNode }) => <h2 className="mb-4 mt-10 text-2xl font-semibold tracking-tight text-foreground">{children}</h2>,
  h3: ({ children }: { children?: ReactNode }) => <h3 className="mb-3 mt-8 text-xl font-semibold tracking-tight text-foreground">{children}</h3>,
  p: ({ children }: { children?: ReactNode }) => <p className="my-6">{children}</p>,
  ul: ({ children }: { children?: ReactNode }) => <ul className="my-6 list-disc space-y-2 pl-6 marker:text-muted-foreground">{children}</ul>,
  ol: ({ children }: { children?: ReactNode }) => <ol className="my-6 list-decimal space-y-2 pl-6 marker:text-muted-foreground">{children}</ol>,
  li: ({ children }: { children?: ReactNode }) => <li className="pl-1">{children}</li>,
  a: ({ children, href }: ComponentProps<"a">) => <a href={href} className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition hover:decoration-foreground">{children}</a>,
  blockquote: ({ children }: { children?: ReactNode }) => <blockquote className="my-7 border-l-2 border-border pl-5 text-muted-foreground">{children}</blockquote>,
  img: ({ alt = "", src = "", ...props }: ComponentProps<"img">) => (
    // MDX images are local article assets by convention and are styled to the article column width.
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} src={src} alt={alt} className="my-8 h-auto w-full rounded-2xl border border-border object-cover" />
  ),
  pre: ({ children, ...props }: ComponentProps<"pre">) => <pre {...props} className={`${styles.code} my-8 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-5 text-sm leading-6 text-slate-100`} >{children}</pre>,
  code: ({ children, className, ...props }: ComponentProps<"code">) => {
    const isBlock = Boolean(className?.includes("language-"));
    return <code {...props} className={isBlock ? className : "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.875em] text-foreground"}>{children}</code>;
  },
};

export function ArticleContent({ source }: { source: string }) {
  return (
    <div className="mt-10 text-[1.0625rem] leading-8 text-foreground/85">
      <MDXRemote source={source} components={components} options={{ mdxOptions: { rehypePlugins: [rehypeHighlight] } }} />
    </div>
  );
}
