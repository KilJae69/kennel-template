// app/components/HeroSlider.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import Image from "next/image";

// import { Container } from "../shared/Container";
import { heroSlides } from "@/constants/heroSlidesData";


import { FaPaw } from "react-icons/fa6";

import RippleLinkButton from "../shared/RippleLinkButton";
import SlideArrowLink from "../shared/SlideArrowLinkButton";
import { Container } from "../shared/Container";

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const slide = heroSlides[idx];

  const next = () => setIdx((i) => (i + 1) % heroSlides.length);
  const prev = () =>
    setIdx((i) => (i - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative pt-42 pb-12 overflow-hidden paper-ripped-edge">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg} -z-10`}
        aria-hidden
      />
<Container>


      <div className="flex flex-col  lg:flex-row items-center h-full w-full">
        {/* Text Column */}
        <div className="lg:w-1/2 px-6 text-center lg:text-left">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={slide.key}
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -150 }}
              transition={{ duration: 0.6 }}
              className=" flex flex-col items-center lg:items-start max-w-3xl mx-auto lg:mx-0"
            >
              <h1 className="text-h1 font-extrabold leading-tight">
                <span className="text-primary-accent">{slide.brand}</span>{" "}
                <span className="text-gradient">{slide.title}</span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl text-primary-lighter max-w-lg mx-auto lg:mx-0">
                {slide.description}
              </p>
              <div className="mt-6  flex flex-col lg:flex-row gap-4">
                <RippleLinkButton href="/contact">Contact Us</RippleLinkButton>
                <SlideArrowLink href="/litters" text="Explore Our Litters" />
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        {/* Image Column */}
        <div className="lg:w-1/2 px-6 flex justify-center items-center h-full ">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={slide.key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              className="relative aspect-square min-h-[400px] w-full"
            >
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-contain"
                priority
              />
            </m.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev/Next Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute cursor-pointer left-6 top-2/3 transform -translate-y-1/2 text-white p-3 bg-black/30 rounded-full hover:bg-black/20 transition hover:text-primary-accent"
      >
        <FaPaw className="w-5 h-5 -rotate-90" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute cursor-pointer hover:text-primary-accent right-6 top-2/3 transform -translate-y-1/2 text-white p-3 bg-black/30 rounded-full hover:bg-black/20 transition"
      >
        <FaPaw className="w-5 h-5 rotate-90" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-4 h-4 rounded-full transition \$
                i === idx ? 'bg-primary-accent' : 'bg-primary-lighter/60 hover:bg-primary-lighter'
              }`}
          />
        ))}
      </div>

      </Container>
    </section>
  );
}
