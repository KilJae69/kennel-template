// app/champions/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";
import ContactForm from "@/components/shared/ContactForm";

import { Trophy, Ribbon, Heart } from "lucide-react";

import { champions } from "@/constants/championsData";
import { AnimatedTimeline } from "@/components/ui/animated-timeline";
import { mapTitlesToTimelineEvents } from "@/lib/utils";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import { IconFactory } from "@/components/shared/IconFactory";
import { judgeTestimonials } from "@/constants/testimonialsData";

export function generateStaticParams() {
  return champions.map((c) => ({ slug: c.slug }));
}

export default async function ChampionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const champ = champions.find((c) => c.slug === slug);
  if (!champ) return notFound();

  return (
    <>
      {/* 1) Hero Banner */}
      <PageIntro title={champ.name} />

      {/* 2) Hero Image + Intro */}
      <section className="my-16 lg:my-28">
        <Container>
          <FadeIn className="">
            <div className="relative w-full aspect-video rounded-2xl max-w-6xl mx-auto mb-8">
              <Image
                src={champ.image}
                alt={`${champ.name} hero`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute right-0 aspect-square w-[20%]">
                <Image
                  fill
                  alt="badge"
                  className="relative z-10 object-contain"
                  src="/images/champions/medal.png"
                />
              </div>
            </div>
            <p className="max-w-2xl text-paragraph mt-8 text-center  mx-auto">
              {champ.desc}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* 3) Stats / Timeline / Health */}
      <section className="my-16 lg:my-28">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
              {/* 1) Stats Card */}
              <div className="space-y-6 p-6 bg-gradient-accent rounded-2xl shadow-md">
                <h3 className="text-xl lg:text-2xl w-fit relative font-semibold text-white">
                  Stats at a Glance
                  <span className="absolute w-full h-px -bottom-1 left-0 bg-white" />
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Ribbon className="size-12 text-white" />
                    <span className="text-white font-semibold text-lg">
                      {champ.stats.showsEntered} Shows Entered
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="size-12 text-white" />
                    <span className="text-white font-semibold text-lg">
                      {champ.stats.bestOfBreed} Best of Breed
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="size-12 text-white" />
                    <span className="text-white font-semibold text-lg">
                      {champ.stats.ribbons} Ribbons
                    </span>
                  </div>
                </div>
              </div>

              {/* 2) Titles & Awards */}
              <div className="space-y-4 p-6 bg-white rounded-2xl shadow-md">
                <h3 className="text-xl lg:text-2xl w-fit relative font-semibold text-primary-accent">
                  Titles & Awards
                  <span className="absolute w-full h-px -bottom-1 left-0 bg-primary-accent" />
                </h3>
                <AnimatedTimeline
                  events={mapTitlesToTimelineEvents(champ.titles)}
                />
              </div>

              {/* 3) Health Clearances */}
              <div className="space-y-6 p-6 bg-gradient-accent rounded-2xl shadow-md">
                <h3 className="text-xl lg:text-2xl w-fit relative font-semibold text-white">
                  Health Clearances
                  <span className="absolute w-full h-px -bottom-1 left-0 bg-white" />
                </h3>
                <ul className="list-disc list-inside flex flex-col gap-4 mt-2">
                  {champ.healthCerts.map((hc) => (
                    <li key={hc} className="text-white font-semibold text-lg">
                      {hc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 4) Gallery */}
      <section className="my-16 lg:my-28">
        <Container>
          <SectionTitle text="Show" accentText="Highlights" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {champ.titles.map((t) => (
              <div
                key={`${t.year}-${t.event}`}
                className="relative aspect-video overflow-hidden rounded-2xl shadow-md"
              >
                {/* In a real app you’d swap these with actual photos */}
                <Image
                  src={t.image}
                  alt={`${champ.name} at ${t.event}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary-accent/70 text-white p-2 text-sm">
                  {t.year} • {t.award}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection
        testimonials={judgeTestimonials}
        sectionText="Judge's"
        sectionAccentText="Comments"
         sectionImage="/images/about/history-2.jpg"
          sectionImageAlt="Cute Corgi puppy on bed"
      />

      {/* 5) Contact Form */}
      <section className="my-16 lg:my-28">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-start sm:items-center space-y-12">
            <SectionTitle
              text="Interested in our"
              accentText={`${champ.name}?`}
            />
            <div className="flex flex-col gap-12">
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 mb-6">
                <div className="flex flex-col gap-4">
                  <h4 className="font-semibold relative text-xl w-fit lg:text-2xl text-primary-accent mb-2">
                    Available For:
                    <span className="absolute w-full h-px -bottom-1 left-0 bg-primary-accent" />
                  </h4>
                  <ul className="space-y-2">
                    {champ.availableFor.map(({ key, label, color }) => (
                      <li key={key} className="flex items-center gap-2">
                        <IconFactory name={key} className={`size-8 ${color}`} />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="font-semibold relative text-xl w-fit lg:text-2xl text-primary-accent mb-2">
                    Current Status:
                    <span className="absolute w-full h-px -bottom-1 left-0 bg-primary-accent" />
                  </h4>
                  <ul className="space-y-2">
                    {champ.currentStatus.map(({ key, label, color }) => (
                      <li key={key} className="flex items-center gap-2">
                        <IconFactory name={key} className={`size-8 ${color}`} />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Transition paragraph */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-lg text-paragraph">
                {champ.gender === "Male" ? (
                  <>
                    {champ.name} is currently available for select services.
                    Whether you&apos;re interested in stud services, breeding
                    consultations, or having him appear at your event, we&apos;d
                    love to discuss how{" "}
                    <span className="text-primary-accent">{champ.name}</span>{" "}
                    can contribute to your breeding program or special occasion.
                  </>
                ) : (
                  <>
                    {champ.name} represents the finest qualities of our breeding
                    program. If you&apos;re interested in future breeding
                    prospects, show appearances, or learning more about her
                    lineage and achievements, please reach out to discuss
                    opportunities.
                  </>
                )}
              </p>
              <p className="mt-4 text-lg font-medium text-primary-accent">
                Complete the form below and we&apos;ll respond within 24-48
                hours.
              </p>
            </div>

            <div className="w-full ">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
