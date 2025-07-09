import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaX, FaYoutube } from "react-icons/fa6";
import { Trophy, Users, Calendar } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

import HistoryFamilySection from "@/components/about-sections/HistoryFamilySection";

import PuppiesForSaleSection from "@/components/about-sections/PuppiesForSaleSection";
import CertificationsSection from "@/components/about-sections/CertificationsSection";



export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-orange-100 py-12 via-orange-200 paper-ripped-edge to-orange-300 mt-32">
        <Container>
          <FadeIn>
            <div className="flex items-center justify-center w-full">
              <h1 className="text-h1 text-primary-accent">About Us</h1>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 1) Welcome */}
      <section className="bg-white my-16 lg:my-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left: title, text, socials */}
            <FadeIn direction="right" className="lg:w-1/2 space-y-8">
              <SectionTitle text="Welcome to" accentText="Maple Grove" />
              <p className="text-paragraph">
                At Maple Grove Corgis, we combine championship bloodlines with
                family-first care. Since 2010, our pups have gone on to win Best
                of Breed titles, capture hearts in homes, and thrive in every
                arena—from playtime to the show ring.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-primary-accent hover:text-primary-accent-dark transition"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-primary-accent hover:text-primary-accent-dark transition"
                >
                  <FaX size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-primary-accent hover:text-primary-accent-dark transition"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-primary-accent hover:text-primary-accent-dark transition"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </FadeIn>

            {/* Right: image */}
            <FadeIn
              direction="left"
              className="lg:w-1/2 relative aspect-video min-h-[300px] w-full"
            >
              <Image
                src="/images/about/about-welcome.jpg"
                alt="Breeder with corgi "
                fill
                sizes="(min-width: 1840px) 770px, (min-width: 1500px) calc(31.25vw + 201px), (min-width: 1040px) calc(39.09vw + 81px), (min-width: 420px) calc(100vw - 32px), calc(10vw + 328px)"
                className="rounded-2xl object-cover w-full h-[300px] sm:h-[400px] lg:h-[450px]"
                priority
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 2) Achievements & Metrics */}
      <section className=" my-16  lg:my-28">
        <Container>
          <FadeIn>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
              {/* Left: Image */}
              <div className="lg:w-1/2 relative aspect-video min-h-[350px] w-full">
                <Image
                  src="/images/about/about-achievements.jpg"
                  alt="Corgi in show ring"
                  fill
                  sizes="(min-width: 1640px) calc(2.21vw + 704px), (min-width: 1040px) calc(35.17vw + 160px), (min-width: 600px) calc(100vw - 32px), 502px"
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>

              {/* Right: 3 Metrics */}
              <div className="lg:w-1/2 space-y-8">
                <SectionTitle text="Our" accentText="Achievements" />
                <p className="text-paragraph">
                  Behind every pup we breed are years of dedication,
                  championship titles, and hundreds of loving families. These
                  highlights define our legacy:
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-12 text-center">
                  <div className="flex flex-col items-center">
                    <Trophy className="size-10 sm:size-16 text-primary-accent mb-4" />
                    <span className="text-2xl sm:text-4xl font-extrabold">
                      50+
                    </span>
                    <span className="sm:text-lg text-primary-lighter">
                      Championships
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="size-10 sm:size-16 text-primary-accent mb-4" />
                    <span className="text-2xl sm:text-4xl font-extrabold">
                      300+
                    </span>
                    <span className="sm:text-lg text-primary-lighter">
                      Puppies Placed
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Calendar className="size-10 sm:size-16 text-primary-accent mb-4" />
                    <span className="text-2xl sm:text-4xl font-extrabold">
                      15
                    </span>
                    <span className="sm:text-lg text-primary-lighter">
                      Years Breeding
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
      {/* 3) History & Family */}
      <HistoryFamilySection />

      
      <PuppiesForSaleSection/>
      
      <CertificationsSection/> 
    </>
  );
}
