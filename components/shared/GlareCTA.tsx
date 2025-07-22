import Image from "next/image";

import { FadeIn, FadeInStagger } from "./FadeIn";

import SpotlightCard from "../ui/spotlight-card";

import SectionTitle from "./SectionTitle";
import SubscribeInput from "./SubscribeInput";
import RippleLinkButton from "./RippleLinkButton";

type GlareCTAProps = {
  titleText: string;
  titleAccentText: string;
  paragraph: string;
  purpose?: "newsletter" | "link";
  overlayColor?: string;
  href?:string;
  ctaText?:string;
};

export default function GlareCTA({
  titleText,
  titleAccentText,
  paragraph,
  href,
  ctaText,
  purpose = "newsletter",
  overlayColor = "rgba(243, 244, 246, 0.8)",
}: GlareCTAProps) {
  return (
    <section className="">
      <SpotlightCard
        className="relative rounded-none py-16 lg:py-28 border-none  w-full bg-transparent"
        spotlightColor={"rgba(226, 106, 44, 0.4)"}
      >
        {/* 1) Background image */}
        <Image
          fill
          className="relative object-cover  -z-20  "
          alt="shapes"
          src="/animated-shape.svg"
        />

        {/* 2) Stronger overlay + blur */}
        <div
          style={{ background: overlayColor }}
          className="absolute inset-0 bg-gray-100/80 backdrop-blur-xs -z-10"
        />

        {/* 3) Centered text block with its own semi-opaque box */}

        <FadeInStagger className="flex flex-col items-center">
          <FadeIn>
            {/* <h2 className="text-2xl md:text-4xl uppercase tracking-widest font-bold  text-primary-accent mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  Elevate Your Sneaker Game
                </h2> */}
            <SectionTitle
              className="text-center"
              color="#e26a2c"
              text={titleText}
              accentText={titleAccentText}
            />
          </FadeIn>
          <FadeIn>
            <p className="max-w-xl mx-auto text-center text-sm md:text-lg leading-relaxed tracking-wide text-black opacity-90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] mt-4 mb-8">
              {paragraph}
            </p>
          </FadeIn>
          <FadeIn className="w-full max-w-xl">
            {purpose === "newsletter" ? (
              <SubscribeInput />
            ) : (
              <RippleLinkButton
                className=" whitespace-nowrap "
                href={href ? href : "#"}
              >
                {ctaText}
              </RippleLinkButton>
            )}
          </FadeIn>
        </FadeInStagger>
      </SpotlightCard>
    </section>
  );
}
