import Image from "next/image";
import type { BlogArticle } from "../blog-content";

export function BlogCover({ article }: { article: BlogArticle }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-100 via-teal-50 to-slate-100">
      <Image
        src={article.thumbnail}
        alt={article.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );
}
