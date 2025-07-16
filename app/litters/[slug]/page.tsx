// app/litters/[slug]/page.tsx

import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";
import ContactForm from "@/components/shared/ContactForm";
import { Baby, Calendar,  BadgeInfo, PawPrint,  Heart } from "lucide-react";
import { litters } from "@/constants/litters";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import { GallerySection } from "@/components/puppies-sections/GallerySection";
import { PuppyCards } from "@/components/puppies-sections/PuppyCards";
import { ParentHeroSection } from "@/components/puppies-sections/ParentHeroSection";




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

  return (
    <>
      {/* 1) Hero Banner */}
      <PageIntro title={litter.title} />

      {/* 2) Hero Image + Intro */}
      <section className="py-16 lg:py-28 relative  bg-radial-gradient from-orange-100 via-orange-200 to-orange-100">
        <ParentHeroSection litter={litter}/>
        
      </section>

      {/* 3) Key Details Section */}
      <section  className=" py-16 lg:py-28 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
              {/* 1) Litter Info Card */}
              <div className="space-y-6 p-6 bg-gradient-accent rounded-2xl shadow-md">
                <h3 className="text-xl lg:text-2xl w-fit relative font-semibold text-white">
                  Litter Details
                  <span className="absolute w-full h-px -bottom-1 left-0 bg-white" />
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-6 text-white" />
                    <span className="text-white font-semibold">
                      {litter.birthDate ? `Born: ${litter.birthDate}` : `Expected: ${litter.expectedDate}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Baby className="size-6 text-white" />
                    <span className="text-white font-semibold">
                      {litter.puppyCount} Puppies
                      {litter.availablePuppies !== undefined && (
                        <span className="font-normal"> ({litter.availablePuppies} available)</span>
                      )}
                    </span>
                  </div>
                  {litter.price && (
                    <div className="flex items-center gap-2">
                      <BadgeInfo className="size-6 text-white" />
                      <span className="text-white font-semibold">
                        Price: {litter.price}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* 2) Parents Info */}
              <div className="space-y-4 p-6 bg-white rounded-2xl shadow-md">
                <h3 className="text-xl lg:text-2xl w-fit relative font-semibold text-primary-accent">
                  Champion Parents
                  <span className="absolute w-full h-px -bottom-1 left-0 bg-primary-accent" />
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="size-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Sire: {litter.sire.name}</p>
                     <p className="text-sm text-gray-600">{litter.sire.titles.at(-1)?.award} ({litter.sire.titles.at(-1)?.year})</p> 
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="size-5 text-rose-500" />
                    <div>
                      <p className="font-medium">Dam: {litter.dam.name}</p>
                      <p className="text-sm text-gray-600">{litter.dam.titles.at(-1)?.award} ({litter.dam.titles.at(-1)?.year})</p> 
                    </div>
                  </div>
                </div>
              </div>

              {/* 3) Health & Registration */}
              <div className="space-y-6 p-6 bg-gradient-accent rounded-2xl shadow-md">
                <h3 className="text-xl lg:text-2xl w-fit relative font-semibold text-white">
                  Health & Registration
                  <span className="absolute w-full h-px -bottom-1 left-0 bg-white" />
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-2">Health Testing:</h4>
                    <ul className="list-disc list-inside flex flex-col gap-1">
                      {litter.healthTesting.map((hc) => (
                        <li key={hc} className="text-white">
                          {hc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Registration:</h4>
                    <div className="flex flex-wrap gap-1">
                      {litter.registrations.map((reg) => (
                        <span key={reg} className="text-white bg-white/20 px-2 py-1 rounded text-sm">
                          {reg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 4) Expected Traits */}
      <section className="my-16 lg:my-28">
        <Container>
          <SectionTitle text="Expected" accentText="Traits" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
            {litter.expectedTraits.map((trait, index) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-white rounded-2xl shadow-md">
                <PawPrint className="size-6 text-primary-accent mt-1 flex-shrink-0" />
                <p className="text-paragraph">{trait}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5) Development Timeline (if available) */}
      {litter.timeline && litter.timeline.length > 0 && (
        <section className="my-16 lg:my-28">
          <Container>
            <SectionTitle text="Development" accentText="Timeline" />
            <div className="mt-8 space-y-4 max-w-4xl mx-auto">
              {litter.timeline.map((event) => (
                <div key={`${event.date}-${event.milestone}`} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex flex-col items-center">
                    <div className={`size-3 rounded-full ${event.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <div className="w-px h-full bg-gray-200" />
                  </div>
                  <div>
                    <p className="font-medium">{event.milestone}</p>
                    <p className="text-sm text-gray-600">{event.date}</p>
                    <p className="text-paragraph mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6) Gallery Section */}
      <GallerySection images={litter.gallery} />

      {/* 7) Puppies Section (if available) */}
      {litter.puppies && litter.puppies.length > 0 && (
        <section className="my-16 lg:my-28">
          <Container>
            <SectionTitle text="Available" accentText="Puppies" />
            <PuppyCards puppies={litter.puppies} />
          </Container>
        </section>
      )}

      <TestimonialsSection />

      {/* 8) Contact Section */}
      <section className="my-16 lg:my-28">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-start sm:items-center space-y-12">
            <SectionTitle text="Interested in this" accentText="Litter?" />
            
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-lg text-paragraph">
                {litter.status === "upcoming" ? (
                  <>
                    Our {litter.title} is expected {litter.expectedDate}. 
                    Join our waiting list to be first in line when these puppies 
                    become available.
                  </>
                ) : litter.status === "available" ? (
                  <>
                    We have {litter.availablePuppies} puppies available from our {litter.title}. 
                    These puppies come from champion bloodlines and are being raised with 
                    our comprehensive socialization program.
                  </>
                ) : (
                  <>
                    While this litter is no longer available, we&apos;d love to discuss 
                    future breeding opportunities with {litter.sire.name} or {litter.dam.name}.
                  </>
                )}
              </p>
              <p className="mt-4 text-lg font-medium text-primary-accent">
                Complete the form below and we&apos;ll respond within 24-48 hours.
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