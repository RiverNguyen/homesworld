
import Image from "next/image";
import Link from "next/link";
import ICArrow from "@/components/icons/ICArrow";

type Blog = {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  category: string;
};

type Variant = "compact" | "large";

export default function BlogItemCompact({ blog, variant = "compact" }: { blog: Blog; variant?: Variant }) {
  if (variant === "large") {
    return (
      <article className="w-full h-full">
        <Link href={`/blog/${blog.slug}`} className="relative flex flex-1 rounded-[1.125rem] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            width={394}
            height={471}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.42)_3.46%,rgba(13,13,13,0.14)_20.54%,rgba(13,13,13,0.14)_44.48%,rgba(13,13,13,0.70)_71.51%)] pointer-events-none" />
          <div className="absolute top-4 right-4 flex-center h-7.25 px-3 rounded-[6rem] bg-[#8CC63F] text-white text-[0.875rem] leading-[150%]">{blog.category}</div>
          <div className="absolute left-0 bottom-0 w-full p-4 flex flex-col gap-3">
            <h3 className="text-white text-[1.25rem] font-medium leading-[130%] line-clamp-2">{blog.title}</h3>
            <div className="w-full border-t border-dashed border-white/32" />
            <div className="flex-y-center justify-between">
              <span className="text-white/70 text-[1rem] leading-[150%]">{blog.date}</span>
              <ICArrow className="size-5" />
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="w-full h-full">
      <Link href={`/blog/${blog.slug}`} className="flex-y-center">
        <div className="relative rounded-[1.125rem] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            width={119}
            height={125}
            className="w-29.75 h-31.25 object-cover"
          />
          <div className="absolute inset-0 opacity-[0.2] bg-black pointer-events-none" />
        </div>
        <div className="flex flex-col gap-3 flex-1 p-4">
          <div className="flex-y-center gap-3">
            <span className="text-[rgba(16,71,95,0.80)] text-[1rem] leading-[150%]">{blog.date}</span>
            <span className="flex-center min-w-22 h-[1.8125rem] px-3 rounded-[6rem] bg-[#8CC63F] text-white text-[0.875rem] leading-[150%]">{blog.category}</span>
          </div>
          <h3 className="text-[#10475F] text-[1.25rem] font-medium leading-[130%] line-clamp-2">{blog.title}</h3>
        </div>
      </Link>
    </article>
  );
}