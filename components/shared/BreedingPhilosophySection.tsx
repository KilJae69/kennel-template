import { HeartPulse, Smile, Ruler } from "lucide-react";
import { Container } from "./Container";
import SectionTitle from "./SectionTitle";
import { FadeIn, FadeInStagger } from "./FadeIn";

export default function BreedingPhilosophySection() {
  return (
    <Container>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <SectionTitle text="Our Breeding" accentText="Commitment" />
          <p className=" text-paragraph mt-8 max-w-3xl mx-auto">
            Every puppy we produce stems from our unwavering dedication to these
            core principles:
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <FadeIn className=" flex" key={item.title}>
              <div
                
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
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Container>
  );
}
