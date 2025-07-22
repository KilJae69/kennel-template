import { blogs } from "@/constants/blogsData";
import BlogsSwiper from "../blogs/BlogsSwiper";
import { Container } from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import SlideArrowLink from "../shared/SlideArrowLinkButton";
import Image from "next/image";

export default function BlogsSection() {
  const filteredBlogs = blogs.slice(0, 5);
  return (
    <section className="py-16 bg-gray-50 relative lg:py-28">
      <Image
        src="/magazine.png"
        alt="magazine bg"
        className="opacity-5 absolute w-1/2 right-0 top-0 lg:-top-18"
        width={1000}
        height={1000}
      />
      <Container>
        <div className="flex flex-col  gap-16">
          <div className="space-y-8 max-w-3xl">
            <div>
              <MovingBorderBadge
                className="text-primary-accent"
                text="Blogs & News"
              />
              <SectionTitle text="Competitions &" accentText="Latest News" />
            </div>
            <p className="text-paragraph">
              From ring-winning show highlights and expert puppy-care tutorials
              to behind-the-scenes looks at health testing and breeding
              practices, our blog delivers insider stories and practical tips to
              help your corgi thrive.
            </p>
            <SlideArrowLink href="/blog" text="Read All Blogs" />
          </div>
          <BlogsSwiper blogs={filteredBlogs} />
        </div>
      </Container>
    </section>
  );
}
