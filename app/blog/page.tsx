// app/blogs/page.tsx

import { blogs } from "@/constants/blogsData";
import { Container } from "@/components/shared/Container";

import BlogCard from "@/components/blogs/BlogCard";
import LatestBlogCard from "@/components/blogs/LatestBlogCard";
import { FadeIn, FadeInStagger } from "@/components/shared/FadeIn";
import BlogsSwiper from "@/components/blogs/BlogsSwiper";
import SectionTitle from "@/components/shared/SectionTitle";
import GlareCTA from "@/components/shared/GlareCTA";

export default function BlogListPage() {
  // Destructure out the 3 newest posts (assumes `blogs` is sorted newest → oldest)
  const [latest1, latest2, latest3, ...rest] = blogs;

  return (
    <>
      <section className="relative py-12 mt-42 ">
        <Container>
          {/* Page Header */}

          <FadeIn>
            <div className="flex flex-col max-w-3xl mb-8 lg:mb-16 mx-auto items-center justify-center w-full">
              <h1 className="text-h1 relative w-fit  pb-6">
                Corgi{" "}
                <span className="text-primary-accent font-extrabold">
                  Chronicles
                </span>
                <span className="w-full bottom-0 left-0 absolute h-px bg-gray-300" />
              </h1>
              <p className="text-paragraph mt-8">
                {" "}
                From ring-winning show highlights to home-grown puppy tips and
                health deep-dives—everything you need to keep your corgi at
                their very best.
              </p>
            </div>
          </FadeIn>

          {/*** Top 3 Featured Layout ***/}
          <FadeInStagger className="flex flex-col gap-8 lg:gap-16 lg:flex-row">
            {latest1 && (
              <FadeIn direction="right">
                <LatestBlogCard priority blog={latest1} />
              </FadeIn>
            )}

            <div className="flex gap-8 flex-col sm:flex-row  lg:flex-col lg:flex-1 lg:min-w-[500px]">
              {latest2 && (
                <FadeIn direction="down" className="size-full flex-1">
                  <BlogCard priority blog={latest2} />
                </FadeIn>
              )}

              {latest3 && (
                <FadeIn direction="up" className="size-full flex-1">
                  <BlogCard priority blog={latest3} />
                </FadeIn>
              )}
            </div>
          </FadeInStagger>
        </Container>
      </section>
      {/* Divider */}
      <div className="border-t border-neutral-200 my-16 " />

      <section className="my-16 ">
        <Container>
          <div className="max-w-3xl space-y-8 mx-auto flex flex-col items-center text-center mb-8">
            <SectionTitle text="More" accentText="Articles" />
            <p className="text-paragraph ">
              Browse our archive of breeding updates, training guides, show
              reports and corgi lifestyle stories.
            </p>
          </div>

          {/*** The Rest of the Blogs ***/}
          {/* {rest.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog: Blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        )} */}
          <BlogsSwiper blogs={rest} />
        </Container>
      </section>
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
