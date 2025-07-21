
import { Blog } from "@/constants/blogsData";
import Image from "next/image";
import Link from "next/link";
import { TbArrowBigRightLines } from "react-icons/tb";

export default function LatestBlogCard({
  blog,
  priority,
}: {
  blog: Blog;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group relative block overflow-hidden pb-8  transition"
    >
      <div className="relative overflow-hidden aspect-video rounded-lg w-full">
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          priority={priority}
          className="object-cover group-hover:scale-105 transition duration-500 rounded-lg"
        />
      </div>
      <div className="py-6 bg-white">
        <p className="text-sm text-neutral-500 mb-1">
          {new Date(blog.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
          {" • "}
          <span className="text-primary-accent">{blog.category}</span>
        </p>
        <div className="border-t border-neutral-200 my-6 sm:my-8 lg:my-12" />
        <h2 className="text-3xl font-semibold mb-3 group-hover:text-primary-accent">
          {blog.title}
        </h2>
        <p className="text-base text-neutral-600 line-clamp-3">{blog.intro}</p>
      </div>
      <span className="absolute flex text-lg items-center gap-2 -translate-x-[200px] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 left-0 -bottom-0 text-primary-accent">
        Read More
        <TbArrowBigRightLines />
      </span>
    </Link>
  );
}
