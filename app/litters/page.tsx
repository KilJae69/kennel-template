import LittersFilterList from "@/components/puppies-sections/LittersFilterList";
import BreedingPhilosophySection from "@/components/shared/BreedingPhilosophySection";
import { Container } from "@/components/shared/Container";
import GlareCTA from "@/components/shared/GlareCTA";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";

import Image from "next/image";

import { Suspense } from "react";

export default function LittersPage() {
  return (
    <>
      <PageIntro title="Litters" />
      <section className="my-16 lg:my-28">
        <Container className="">
          <div className="text-center mb-16 flex flex-col items-center gap-8">
            <SectionTitle text="Our Corgi" accentText="Litters" />

            <p className="text-paragraph max-w-3xl mx-auto ">
              Discover our carefully planned litters from champion bloodlines.
              Each puppy is raised with love, extensive socialization, and
              dedication to preserving the wonderful Pembroke Welsh Corgi breed
              standard.
            </p>
          </div>

          <Suspense fallback={<Fallback />}>
            <LittersFilterList />
          </Suspense>
        </Container>
      </section>
      <section className="bg-gray-50 py-16 lg:py-28">
        <BreedingPhilosophySection />
      </section>
     
      <GlareCTA
      overlayColor="rgba(255, 255, 255, 0.8)"
        titleText="Interested in"
        titleAccentText="Future Litters?"
        paragraph=" Join our mailing list to be notified about upcoming litters and
          available puppies."
      />
    </>
  );
}

function Fallback() {
  return (
    <div className="flex items-center relative justify-center min-h-screen">
      <Image
        src="/bouncing-circles.svg"
        width={300}
        height={300}
        alt="Loading"
      />
    </div>
  );
}
