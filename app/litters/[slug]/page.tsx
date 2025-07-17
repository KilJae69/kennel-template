// app/litters/[slug]/page.tsx

import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";
import ContactForm from "@/components/shared/ContactForm";
import { Baby, Calendar, BadgeInfo, PawPrint, Heart } from "lucide-react";
import { litters } from "@/constants/litters";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import { GallerySection } from "@/components/puppies-sections/GallerySection";

import { ParentHeroSection } from "@/components/puppies-sections/ParentHeroSection";
import PuppyCard from "@/components/puppies-sections/PuppyCard";
import {
  adopterTestimonials,
  healthProfessionalTestimonials,
  previousBuyerTestimonials,
  Testimonial,
} from "@/constants/testimonialsData";
import { InfoCard } from "@/components/puppies-sections/LitterInfoCard";
import { MovingBorderBadge } from "@/components/shared/MovingBorderBadge";

export function generateStaticParams() {
  return litters.map((l) => ({ slug: l.slug }));
}

export default async function LitterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const litter = litters.find((l) => l.slug === slug);
  if (!litter) return notFound();

  // pick the right testimonials array
  let testimonials: Testimonial[] = [];
  let sectionText = "";
  let sectionAccentText = "";

  switch (litter.status) {
    case "upcoming":
      testimonials = healthProfessionalTestimonials;
      sectionText = "What Our";
      sectionAccentText = "Health Pros Say";
      break;

    case "available":
      testimonials = previousBuyerTestimonials;
      sectionText = "What Our";
      sectionAccentText = "Past Buyers Say";
      break;

    case "sold-out":
      testimonials = adopterTestimonials;
      sectionText = "What Our";
      sectionAccentText = "Adopters Say";
      break;
  }

  return (
    <>
      {/* 1) Hero Banner */}
      <PageIntro title={litter.title} />

      {/* 2) Hero Image + Intro */}
      <section className="pb-16 pt-12 lg:pt-16 lg:pb-28 relative  bg-radial-gradient from-orange-100 via-orange-200 to-orange-100">
        <FadeIn className="flex flex-col items-center gap-4">
          <MovingBorderBadge
            className="text-primary-accent"
            text="Pemroke Welsh Corgi"
          />
          <p className="max-w-2xl mx-auto text-paragraph text-center mb-8">
            {litter.status === "upcoming"
              ? `Our next Pembroke Welsh Corgi litter whelping on ${litter.expectedDate}, bred for health, temperament, and top‐ring performance.`
              : litter.status === "available"
              ? `We currently have ${litter.availablePuppies} of ${litter.puppyCount} puppies available from champion bloodlines.`
              : `This litter has already found loving homes, but we’d be happy to discuss future breedings with ${litter.sire.name} or ${litter.dam.name}.`}
          </p>
        </FadeIn>
        <ParentHeroSection litter={litter} />
      </section>

      {/* —— Unified Info Section —— */}
      <section className="py-16 lg:py-28 bg-gray-50">
        <Container>
          <FadeIn className="text-center mb-12 flex flex-col items-center">
            <SectionTitle text="Litter" accentText="Overview" />
            <p className="mt-8 max-w-2xl mx-auto text-paragraph">
              Everything you need to know about this litter at a glance — from
              key dates and pricing, to champion parentage, expected traits and
              our on-site terms.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 1) Litter Details */}
              <InfoCard title="Litter Details">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Calendar className="inline-block size-5 text-primary-accent mr-2" />
                    {litter.birthDate
                      ? `Born: ${litter.birthDate}`
                      : `Expected: ${litter.expectedDate}`}
                  </li>
                  <li>
                    <Baby className="inline-block size-5 text-primary-accent mr-2" />
                    {litter.puppyCount} Puppies
                    {litter.availablePuppies != null && (
                      <span className="text-gray-500">
                        {" "}
                        ({litter.availablePuppies} available)
                      </span>
                    )}
                  </li>
                  {litter.price && (
                    <li>
                      <BadgeInfo className="inline-block size-5 text-primary-accent mr-2" />
                      Price: {litter.price}
                    </li>
                  )}
                </ul>
              </InfoCard>

              {/* 2) Champion Parents */}
              <InfoCard title="Champion Parents">
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <Heart className="size-5 text-blue-500 mr-2" />
                    <div>
                      <p className="font-medium">Sire: {litter.sire.name}</p>
                      <p className="text-sm text-gray-500">
                        {litter.sire.titles.at(-1)?.award} (
                        {litter.sire.titles.at(-1)?.year})
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Heart className="size-5 text-rose-500 mr-2" />
                    <div>
                      <p className="font-medium">Dam: {litter.dam.name}</p>
                      <p className="text-sm text-gray-500">
                        {litter.dam.titles.at(-1)?.award} (
                        {litter.dam.titles.at(-1)?.year})
                      </p>
                    </div>
                  </div>
                </div>
              </InfoCard>

              {/* 3) Expected Traits */}
              <InfoCard title="Expected Traits">
                <div className="flex flex-wrap gap-2">
                  {litter.expectedTraits.map((trait) => (
                    <span
                      key={trait}
                      className="flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm"
                    >
                      <PawPrint className="size-4 text-primary-accent" />
                      {trait}
                    </span>
                  ))}
                </div>
              </InfoCard>

              {/* 4) Terms & Conditions */}
              <InfoCard title="Terms & Conditions">
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {litter.terms.map((term) => (
                    <li key={term}>{term}</li>
                  ))}
                </ul>
              </InfoCard>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 6) Gallery Section */}
      {litter.gallery && litter.gallery.length > 0 && (
        <GallerySection images={litter.gallery} />
      )}

      {/* 7) Puppies Section (if available) */}
      {litter.puppies && litter.puppies.length > 0 && (
        <section className="my-16 lg:my-28">
          <Container>
            <SectionTitle text="Meet the" accentText="Available Puppies" />
            <div className="grid mt-8 grid-cols-1 gap-6 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {litter.puppies.map((pup) => (
                <PuppyCard key={pup.id} puppy={pup} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Testimonials */}
      <TestimonialsSection
        testimonials={testimonials}
        sectionText={sectionText}
        sectionAccentText={sectionAccentText}
        sectionImage="/images/about/history-2.jpg" // pick an image you like
        sectionImageAlt="Testimonials background"
      />

      {/* 8) Contact Section */}
      <section className="my-16 lg:my-28">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-start sm:items-center space-y-12">
            <SectionTitle text="Interested in this" accentText="Litter?" />

            <div className="text-center max-w-2xl mx-auto">
              <p className="text-lg text-paragraph">
                {litter.status === "upcoming" ? (
                  <>
                    Our {litter.title} is expected {litter.expectedDate}. Join
                    our waiting list to be first in line when these puppies
                    become available.
                  </>
                ) : litter.status === "available" ? (
                  <>
                    We have {litter.availablePuppies} puppies available from our{" "}
                    {litter.title}. These puppies come from champion bloodlines
                    and are being raised with our comprehensive socialization
                    program.
                  </>
                ) : (
                  <>
                    While this litter is no longer available, we&apos;d love to
                    discuss future breeding opportunities with{" "}
                    {litter.sire.name} or {litter.dam.name}.
                  </>
                )}
              </p>
              <p className="mt-4 text-lg font-medium text-primary-accent">
                Complete the form below and we&apos;ll respond within 24-48
                hours.
              </p>
            </div>

            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
