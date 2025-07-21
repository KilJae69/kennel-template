// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { blogs } from "@/constants/blogsData";
import ShareLinks from "@/components/ShareLinks";
import BlogCard from "@/components/blogs/BlogCard";
import { shuffleArray } from "@/lib/utils";
import GlareCTA from "@/components/shared/GlareCTA";

/** Simple blockquote for expert sound-bytes */
function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative border-l-4 border-primary-accent pl-4 italic text-gray-700 my-8">
      <p>&quot;{children}&quot;</p>
    </blockquote>
  );
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  // ## Temporary dummy shuffle blogs
  const shuffledBlogs = shuffleArray(blogs);
  const randomBlogs = shuffledBlogs.slice(0, 3);

  return (
    <>
    
    <article className="relative py-12 mt-42 lg:pb-24">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row-reverse">
          <aside className="sticky top-22 flex h-full lg:max-w-[380px] flex-col gap-8 bg-white lg:p-8 lg:shadow-md">
            <h3 className="text-xl border-b border-primary-accent pb-2 font-semibold text-primary">
              <span>Share on</span>{" "}
              <span className="text-primary-accent">Socials</span>
            </h3>
            <ShareLinks />
              <h3 className="text-xl border-b border-primary-accent pb-2 font-semibold text-primary">
              <span>Your Next</span>{" "}
              <span className="text-primary-accent">Read</span>
            </h3>
            <ul className="grid gap-5  sm:grid-cols-2 lg:grid-cols-1">
              {randomBlogs.map((blog) => (
                <li key={blog.slug}>
                  <BlogCard blog={blog} />
                </li>
              ))}
            </ul>
          </aside>

          <div className="max-w-4xl mx-auto lg:pr-8">
            {/* Title */}
            <h1 className="text-h1 text-gradient-accent mb-4">{blog.title}</h1>

            {/* Meta */}
            <div className="text-sm text-neutral-500 mb-8">
              <time dateTime={blog.publishDate}>
                {new Date(blog.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {" • "}
              <span className="font-medium text-primary-accent">
                {blog.category}
              </span>
              {" • "}
              {blog.tags.map((tag) => (
                <span key={tag} className="inline-block mr-1 last:mr-0">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-md">
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Intro */}
            <p className="text-paragraph mb-8">{blog.intro}</p>

            {/* Content */}
            {blog.content.map((block, idx) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2 key={idx} className="text-2xl font-semibold mb-4">
                      {block.text}
                    </h2>
                  );
                case "paragraph":
                  return (
                    <p key={idx} className="text-paragraph mb-6">
                      {block.text}
                    </p>
                  );
                case "image":
                  return (
                    <div
                      key={idx}
                      className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
              }
            })}

            {/* Expert Quote */}
            <Quote>
              “A confident handler brings out the best in every corgi—true
              partnership is what wins in the ring.”
            </Quote>

            {/* Secondary Image */}
            <div className="relative w-full h-[400px] my-10 rounded-lg overflow-hidden shadow-md">
              <Image
                src={blog.secondaryImage}
                alt={`${blog.title} secondary`}
                fill
                className="object-cover"
              />
            </div>

            {/* Concluding Section */}
            <h2 className="text-2xl font-semibold mb-4">
              Key Takeaways for Your Next Show
            </h2>
            <p className="text-paragraph mb-6">
              Whether you’re debuting your corgi in conformation or heading into
              a herding trial, early preparation—grooming, stacking practice,
              and socialization— will set you both up for success.
            </p>
            <p className="text-paragraph mb-6">
              Remember: every ring is a learning opportunity. Keep notes on your
              dog’s performance, adjust your handling strategy, and celebrate
              the small wins. That journey is what makes the bond so rewarding.
            </p>
          </div>
        </div>
      </Container>
    </article>
      <section>
            <GlareCTA
              titleText={"Stay in the"}
              titleAccentText={"Pack"}
              paragraph="From whelping room sneak-peeks to champion show ring recaps and
                  expert puppy-care guides—get it all straight to your inbox."
            />
          </section>
    </>
  );
}
