

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import RippleLinkButton from "@/components/shared/RippleLinkButton";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { FaArrowRight, FaQuestion } from "react-icons/fa6";
import { FadeIn } from "../shared/FadeIn";

const puppies = [
  {
    id: "parker",
    name: "Parker",
    gender: "Male",
    desc: "He’s a researcher! Intelligent, shy, calm, but inquisitive.",
    slug: "parker",
    coords: { x: "25%", y: "35%" },
  },
  {
    id: "bear",
    name: "Bear",
    gender: "Male",
    desc: "Playful leader of the pack—curious, brave, always on the move.",
    slug: "bear",
    coords: { x: "40%", y: "60%" },
  },
  {
    id: "hazel",
    name: "Hazel",
    gender: "Female",
    desc: "Sweet and affectionate—loves cuddles and gentle family time.",
    slug: "hazel",
    coords: { x: "70%", y: "65%" },
  },
];

export default function PuppiesForSaleSection() {
  return (
    <section className="relative grid grid-cols-1 sm:grid-cols-2 my-16  lg:my-28">
      <div className="bg-primary-accent max-h-[600px] overflow-hidden">
        <Container className="relative">
          <div className="flex flex-col lg:flex-row">
            {/* text (on top of color) */}
            <FadeIn className="py-16 lg:py-28 lg:pr-22 xl:pr-0 flex-shrink-0 flex text-center mx-auto items-center flex-col gap-8 justify-center max-w-xl text-white">
              <SectionTitle
                text="Puppies"
                accentText="For Sale"
                accentColor="#fff"
              />
              <p className="text-paragraph !text-white">
                Our corgi puppies are 8 weeks old, raised in a loving home with
                early socialization and training. They’re friendly, obedient,
                and ready to bring endless joy to your family.
              </p>
              <RippleLinkButton invert href="/puppies">
                View All Puppies
              </RippleLinkButton>
            </FadeIn>
          </div>
        </Container>
      </div>
      <div className="relative max-h-[600px] overflow-hidden">
        {" "}
        <Image
          src="/images/about/puppies-group.jpg"
          alt="Group of corgi puppies"
          fill
          sizes="(min-width: 1140px) calc(48.33vw + 50px), (min-width: 920px) 50vw, (min-width: 640px) 499px, 100vw"
          className="object-cover"
          
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* hotspots (on top of image) */}
        <div className="relative hidden sm:block aspect-video min-h-[400px] w-full">
          {puppies.map((p) => (
            <HoverCard key={p.id}>
              <HoverCardTrigger asChild>
                <button
                  style={{
                    left: p.coords.x,
                    top: p.coords.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute flex items-center justify-center text-primary-accent cursor-pointer transition duration-500 hover:scale-110 size-8 bg-white border-2 border-primary-accent rounded-full shadow-lg"
                >
                  <FaQuestion />
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="!w-56 bg-white border-primary-accent">
                <h4 className="text-lg font-semibold text-primary-accent">
                  {p.name}
                </h4>
                <p className="text-sm text-primary-lighter mb-1">{p.gender}</p>
                <p className="text-sm mb-3 text-gray-700">{p.desc}</p>
                <Link
                  href={`/puppies/${p.slug}`}
                  className="text-primary-accent group hover:text-primary-accent-dark flex items-center gap-2 font-medium"
                >
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-2 transition duration-300 size-3"/>
                </Link>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
