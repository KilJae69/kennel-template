import { Trophy, Heart, PawPrint, MessageCircle } from "lucide-react";

import { Container } from "../shared/Container";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import SectionTitle from "../shared/SectionTitle";
import { StylizedImage } from "../shared/StylizedImage";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";
import imageLaptop from "@/public/images/about/about-section-2.jpg";
import RippleLinkButton from "../shared/RippleLinkButton";

const services = [
  {
    id: "competition",
    Icon: Trophy,
    title: "Show Ring Preparation",
    description:
      "Expert handling & training so your pup shines at every championship.",
  },
  {
    id: "breeding",
    Icon: Heart,
    title: "Ethical Breeding",
    description:
      "Rigorous health testing & champion bloodlines to uphold breed standards.",
  },
  {
    id: "socialization",
    Icon: PawPrint,
    title: "Puppy Socialization",
    description:
      "Early neurological stimulation and group play for confident, happy puppies.",
  },
  {
    id: "support",
    Icon: MessageCircle,
    title: "Lifelong Support",
    description:
      "Ongoing care advice—from nutrition tips to training refreshers—for life.",
  },
];

export default function AboutSection() {
  return (
    <section className="my-16  lg:mt-28">
      <Container>
        {/* --- Intro & Badges --- */}
        <div className="grid lg:grid-cols-2">
          <div className="mb-16 space-y-8">
            <FadeIn direction="down">
              <MovingBorderBadge
                className="text-primary-accent"
                text="About Us"
              />
              <SectionTitle text="Meet Maple" accentText="Grove Corgis" />
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-paragraph">
                Combining championship bloodlines with family-first care since
                2010. We raise each litter with meticulous health testing,
                champion parentage, and a lot of love—so your new corgi is ready
                for both the show ring and your sofa.
              </p>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2   gap-8">
              {services.map(({ id, Icon, title, description }) => (
                <FadeIn
                  key={id}
                  className="flex flex-col items-center text-center"
                >
                  <Icon className="mb-4 h-12 w-12 text-primary-accent" />
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-paragraph">{description}</p>
                </FadeIn>
              ))}
            </FadeInStagger>
            <FadeIn direction="up" className="mx-auto">
              <RippleLinkButton href="/about">Find Out More</RippleLinkButton>
            </FadeIn>
          </div>

          <FadeIn className="w-full flex-none lg:max-w-[45rem]">
            <StylizedImage
              src={imageLaptop}
              sizes="655px"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        </div>
        {/* --- Certifications & Partnerships --- */}
      </Container>
    </section>
  );
}
