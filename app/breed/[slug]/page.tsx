// app/breed/[slug]/page.tsx  (or pages/breed/[slug].tsx)

import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";
import { breedTips } from "@/constants/breedTips";
import clsx from "clsx";
import {
  Scissors,
  Home,
  Bone,
  ArrowLeft,
  Pill,
  Heart,
  Dumbbell,
} from "lucide-react";
import AnimatedDock from "@/components/ui/animated-dock";

export function generateStaticParams() {
  return breedTips.map((b) => ({ slug: b.slug }));
}

export default async function TipPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
     const { slug } = await params;
  const tip = breedTips.find((b) => b.slug === slug);
  if (!tip) return notFound();

  return (
    <>
      {/* Page Intro / Hero Title */}
      <PageIntro title={tip.title} />

      {/* Hero Image + Intro */}
      <section className="my-16 lg:my-28 relative">
        <div className="fixed z-100 bottom-2 right-0 flex   w-full items-center justify-center">
  <AnimatedDock
    items={[
      {
        href: '/breed',
        icon: <ArrowLeft />,
        title: 'Back to Tips'
      },
      {
        href: '/breed/care',
        icon: <Scissors />,
        title: 'Care'
      },
      {
        href: "/breed/keeping",
        icon: <Home />,
        title: 'Keeping'
      },
      {
        href: "/breed/food",
        icon: <Bone />,
        title: 'Food'
      },
      {
        href: "/breed/vitamins",
        icon: <Pill />,
        title: 'Vitamins'
      },
      {
        href: "/breed/health",
        icon: <Heart />,
        title: 'Health'
      },
      {
        href: "/breed/exercise",
        icon: <Dumbbell />,
        title: 'Exercise'
      },
    ]}
    smallClassName=" ml-2 w-full"
  />
</div>
        <Container>
          <FadeIn>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
              <Image
                src={tip.heroImage}
                alt={`${tip.title} hero`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-12">
              <p className=" text-paragraph mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aut dignissimos nesciunt alias consectetur laboriosam tempora
                tenetur aperiam quam molestiae mollitia sapiente aliquam culpa
                deserunt, quasi ullam temporibus autem. Eaque! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Aut amet culpa dolorem
                suscipit placeat sequi quo recusandae incidunt sed odit ullam
                esse, ratione necessitatibus aperiam eaque. Debitis officiis
                voluptas ad?Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Dignissimos possimus vitae temporibus autem reprehenderit,
                et consectetur praesentium ea rerum fuga non modi natus facilis.
                Expedita eligendi assumenda possimus culpa voluptatum?
              </p>
              <p className=" text-paragraph mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aut dignissimos nesciunt alias consectetur laboriosam tempora
                tenetur aperiam quam molestiae mollitia sapiente aliquam culpa
                deserunt, quasi ullam temporibus autem. Eaque! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Aut amet culpa dolorem
                suscipit placeat sequi quo recusandae incidunt sed odit ullam
                esse, ratione necessitatibus aperiam eaque. Debitis officiis
                voluptas ad?Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Dignissimos possimus vitae temporibus autem reprehenderit,
                et consectetur praesentium ea rerum fuga non modi natus facilis.
                Expedita eligendi assumenda possimus culpa voluptatum?
              </p>
              <p className=" text-paragraph mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aut dignissimos nesciunt alias consectetur laboriosam tempora
                tenetur aperiam quam molestiae mollitia sapiente aliquam culpa
                deserunt, quasi ullam temporibus autem. Eaque! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Aut amet culpa dolorem
                suscipit placeat sequi quo recusandae incidunt sed odit ullam
                esse, ratione necessitatibus aperiam eaque. Debitis officiis
                voluptas ad?Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Dignissimos possimus vitae temporibus autem reprehenderit,
                et consectetur praesentium ea rerum fuga non modi natus facilis.
                Expedita eligendi assumenda possimus culpa voluptatum?
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Detail Sections */}
      {tip.sections.map((sec, i) => (
        <section key={sec.heading} className="my-16 lg:my-28">
          <Container>
            <FadeIn>
              <div
                className={clsx(
                  "flex flex-col lg:flex-row items-center gap-12",
                  i % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                {/* Image */}
                <FadeIn
                  direction={i % 2 === 0 ? "right" : "left"}
                  className="lg:w-1/2 relative aspect-video w-full rounded-2xl overflow-hidden"
                >
                  <Image
                    src={sec.image}
                    alt={sec.heading}
                    fill
                    className="object-cover"
                  />
                </FadeIn>

                {/* Text */}
                <FadeIn
                  direction={i % 2 === 0 ? "left" : "right"}
                  className="lg:w-1/2 space-y-4"
                >
                  <SectionTitle
                    text={sec.heading}
                    accentText={sec.headingAccent}
                  />
                  <p className="text-paragraph">{sec.text}</p>
                </FadeIn>
              </div>
            </FadeIn>
          </Container>
        </section>
      ))}
    </>
  );
}
