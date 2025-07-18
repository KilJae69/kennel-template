import CertificationsSection from "@/components/about-sections/CertificationsSection";
import PuppiesForSaleSection from "@/components/about-sections/PuppiesForSaleSection";
import DogsFilterList from "@/components/dogs-sections/DogsFilterList";
import BreedingPhilosophySection from "@/components/shared/BreedingPhilosophySection";
import { Container } from "@/components/shared/Container";
import GlareCTA from "@/components/shared/GlareCTA";
import { MovingBorderBadge } from "@/components/shared/MovingBorderBadge";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";

import { Award, Heart, Trophy } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

export default function DogsPage() {
  return (
    <>
      <PageIntro title="Our Champions" />
      {/* Introduction Section */}
      <section className="my-16 lg:my-28">
        <Container>
          <div className="max-w-4xl flex flex-col items-center mx-auto text-center">
            <SectionTitle text="Celebrating" accentText="Excellence" />
            <p className="text-lg md:text-xl text-paragraph my-8">
              Meet the proud representatives of our breeding program - AKC
              champions who exemplify the finest qualities of the breed. Each
              champion has proven themselves in the show ring while contributing
              to our mission of preserving and improving breed standards.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <MovingBorderBadge
                icon={<Trophy className="text-primary-accent" />}
                text="AKC Certified"
              />
              <MovingBorderBadge
                icon={<Heart className="text-primary-accent" />}
                text="Health Tested"
              />
              <MovingBorderBadge
                icon={<Award className="text-primary-accent" />}
                text="Show Winners"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Champions Grid */}
      <section className="my-16 lg:my-28">
        <Container>
          <div className="flex flex-col items-center space-y-8">
            <SectionTitle text="Our Lads" accentText="& Lassies" />
            <Suspense fallback={<Fallback />}>
              <DogsFilterList />
            </Suspense>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 lg:py-28">
        <BreedingPhilosophySection />
      </section>

      <PuppiesForSaleSection />
      <CertificationsSection/>
      <GlareCTA
        purpose="contact"
        titleText="Ready to"
        titleAccentText="Learn More?"
        paragraph="Whether you’d like to tour our facility, discuss upcoming breedings,
            or arrange a meet-and-greet with our AKC champions, we’re here to help."
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
