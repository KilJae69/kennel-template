import PuppiesForSaleSection from "@/components/about-sections/PuppiesForSaleSection";
import DogsFilterList from "@/components/dogs-sections/DogsFilterList";
import { Container } from "@/components/shared/Container";
import { MovingBorderBadge } from "@/components/shared/MovingBorderBadge";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";

import { Award, Heart, HeartPulse, Ruler, Smile, Trophy } from "lucide-react";

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
            <DogsFilterList />
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 lg:py-28">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <SectionTitle text="Our Breeding" accentText="Commitment" />
              <p className=" text-paragraph mt-8 max-w-3xl mx-auto">
                Every puppy we produce stems from our unwavering dedication to
                these core principles:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Health First",
                  desc: "All breeding dogs undergo OFA certifications, genetic testing, and regular health screenings to ensure the strongest foundation for our puppies.",
                  icon: (
                    <HeartPulse className="size-8 text-primary-accent animate-pulse" />
                  ),
                  bg: "bg-primary-accent/5",
                },
                {
                  title: "Ideal Temperament",
                  desc: "We prioritize stable, confident personalities that excel both in the show ring and as family companions.",
                  icon: (
                    <Smile className="size-8 text-primary-accent animate-pulse" />
                  ),
                  bg: "bg-primary-accent/10",
                },
                {
                  title: "Breed Standard",
                  desc: "Meticulous attention to AKC specifications for structure, movement, and type in every breeding decision.",
                  icon: (
                    <Ruler className="size-8 text-primary-accent animate-pulse" />
                  ),
                  bg: "bg-primary-accent/5",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`${item.bg} p-8 rounded-xl border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-300 group`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white size-16 flex items-center justify-center p-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-primary-accent mb-3">
                      {item.title}
                    </h4>
                    <p className="text-paragraph">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <PuppiesForSaleSection />
    </>
  );
}
