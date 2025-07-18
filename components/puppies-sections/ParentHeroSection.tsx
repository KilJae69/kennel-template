// components/litters/ParentHeroSection.tsx
"use client";

import { m, Variants, Transition } from "framer-motion";

import { Heart } from "lucide-react";
import { Litter, LitterStatus } from "@/constants/litters";
import { Container } from "../shared/Container";
import { ParentCard } from "./ParentCard";
import { FadeIn } from "../shared/FadeIn";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reduced stagger for more synchronized entry
      delayChildren: 0.3,
    } as Transition,
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // More natural bounce effect
    } as Transition,
  },
};

const heartVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [1, 1.15, 1],
    opacity: 1,
    transition: {
      scale: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.8, // Slower pulse
        ease: "easeInOut",
      } as Transition,
      opacity: { duration: 0.6 } as Transition,
      delay: 0.4, // Slight delay to appear after cards
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.2, // Appears before heart
    } as Transition,
  },
};

interface StatusConfig {
  text: string;
  color: string;
}

const statusConfig: Record<LitterStatus, StatusConfig> = {
  upcoming: { text: "Coming Soon", color: "bg-blue-100 text-blue-800" },
  available: {
    text: "Puppies Available",
    color: "bg-green-100 text-green-800",
  },
  "sold-out": { text: "Litter Placed", color: "bg-gray-100 text-gray-800" },
  reserved: { text: "Reserved", color: "bg-yellow-100 text-yellow-800" },
};

export function ParentHeroSection({ litter }: { litter: Litter }) {
  return (
    
      <Container >
        <m.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 xl:gap-16"
        >
          {/* Sire Card */}
          <FadeIn
            direction="right"
            className="flex-1 w-full max-w-md lg:max-w-lg"
          >
            <ParentCard
              image={litter.sire.image}
              name={litter.sire.name}
              role="Sire"
              titles={litter.sire.titles}
              slug={litter.sire.slug}
               championData={litter.sire}
            />
          </FadeIn>

          {/* Center Connection */}
          <div className="relative flex-1 flex flex-col items-center py-4 lg:py-0 w-full lg:w-auto">
            {/* Single Connection Line */}
            <m.div
              variants={lineVariants}
              className=" absolute h-1 w-full bg-gradient-to-r from-primary-accent/50 via-primary-accent to-primary-accent/50 top-23 left-0 origin-center"
              style={{
               
                transformOrigin: "center",
              }}
            />

            {/* Animated Heart */}
            <m.div
              variants={heartVariants}
              className="relative z-10 bg-white p-4 rounded-full shadow-xl border-4 border-white"
            >
              <Heart className="size-10 lg:size-12 text-rose-500 fill-rose-500/30" />
            </m.div>

            {/* Litter Info */}
            <m.div
              variants={cardVariants}
              className="mt-4 text-center px-4"
            >
              <div className="flex flex-col gap-2 max-w-xl items-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-accent   rounded-full px-6 py-2 inline-block">
                  {litter.title}
                </h2>
                <p className="text-lg text-paragraph-light">
                  {litter.description}
                </p>
                <span
                  className={`inline-block animate-pulse w-fit px-6 py-2.5 rounded-full text-lg mt-2 font-semibold ${
                    statusConfig[litter.status].color
                  } shadow-sm`}
                >
                  {statusConfig[litter.status].text}
                </span>
              </div>
            </m.div>
          </div>

          {/* Dam Card */}
          <FadeIn
            direction="left"
            className="flex-1 w-full max-w-md lg:max-w-lg"
          >
            <ParentCard
              image={litter.dam.image}
              name={litter.dam.name}
              role="Dam"
              titles={litter.dam.titles}
               slug={litter.dam.slug}
                championData={litter.dam}
            />
          </FadeIn>
        </m.div>
      </Container>
    
  );
}
