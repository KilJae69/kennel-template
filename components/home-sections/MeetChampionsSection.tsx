// app/components/ChampionsSlider.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import { Container } from "../shared/Container";
import { champions } from "@/constants/championsData";
import { FaTrophy, FaRibbon, FaMedal } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import RippleLinkButton from "../shared/RippleLinkButton";
import { IconFactory } from "../shared/IconFactory";
import { FadeIn } from "../shared/FadeIn";

export default function ChampionsSlider() {
  const [idx, setIdx] = useState(0);
  const slide = champions[idx];

  const next = () => setIdx((i) => (i + 1) % champions.length);
  const prev = () =>
    setIdx((i) => (i - 1 + champions.length) % champions.length);

  const statItems = [
    { Icon: FaMedal, label: "Shows Entered", value: slide.stats.showsEntered },
    { Icon: FaRibbon, label: "Ribbons", value: slide.stats.ribbons },
    { Icon: FaTrophy, label: "Best of Breed", value: slide.stats.bestOfBreed },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <FadeIn>
        <Container>
          <MovingBorderBadge
            className="text-primary-accent"
            text="Our Corgies"
          />
          <SectionTitle text="Meet Our" accentText="Champions" />
          <p className="mt-4 text-paragraph max-w-2xl">
            From ring victories to top-tier pedigrees, our champions showcase
            the very best of Maple Grove breeding—talented, tested, and
            treasured. Flip through to meet each standout star.
          </p>

          <div className="flex flex-col mt-8 md:mt-16   md:flex-row justify-between items-center">
            {/* TEXT COLUMN */}
            <div className="lg:w-1/2  max-w-3xl relative z-10">
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={slide.id}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className=" mx-auto  lg:mx-0 space-y-8"
                >
                  <h3 className="text-5xl text-gradient-accent lg:text-7xl font-extrabold">
                    {slide.name}
                  </h3>
                  <p className="text-paragraph">{slide.desc}</p>

                  <div className="grid grid-cols-3 py-4 bg-gradient-accent rounded-xl gap-4">
                    {statItems.map(({ Icon, label, value }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center text-center"
                      >
                        <Icon className="text-white size-8 lg:size-12 mb-2" />
                        <span className="font-semibold text-white lg:text-3xl">
                          {value}
                        </span>
                        <span className="text-sm lg:text-lg text-white">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-16 mb-6">
                    <div className="flex flex-col gap-4">
                      <h4 className="font-semibold relative text-xl w-fit lg:text-2xl text-primary-accent mb-2">
                        Available For:
                        <span className="absolute w-full h-px -bottom-1 left-0 bg-primary-accent" />
                      </h4>
                      <ul className="space-y-2">
                        {slide.availableFor.map(({ key, label, color }) => (
                          <li key={key} className="flex items-center gap-2">
                            <IconFactory
                              name={key}
                              className={`size-8 ${color}`}
                            />
                            <span>{label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h4 className="font-semibold relative text-xl w-fit lg:text-2xl text-primary-accent mb-2">
                        Current Status:
                        <span className="absolute w-full h-px -bottom-1 left-0 bg-primary-accent" />
                      </h4>
                      <ul className="space-y-2">
                        {slide.currentStatus.map(({ key, label, color }) => (
                          <li key={key} className="flex items-center gap-2">
                            <IconFactory
                              name={key}
                              className={`size-8 ${color}`}
                            />
                            <span>{label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </m.div>
              </AnimatePresence>
              <div className="flex flex-col items-start space-x-4 mt-8">
                <div className="w-full shadow p-2 bg-gray-50 rounded-full gap-4 flex items-center justify-between">
                  <button
                    onClick={prev}
                    aria-label="Previous champion"
                    className="p-2 cursor-pointer text-gray-700 bg-gray-200 md:size-16 flex items-center justify-center transition-colors duration-300 hover:text-white rounded-full hover:bg-primary-accent"
                  >
                    <FaChevronLeft className="w-5 h-5 " />
                  </button>
                  <div className="flex-1">
                    <RippleLinkButton href="/dogs" className="!text-sm">
                      View All Dogs
                    </RippleLinkButton>
                  </div>
                  <button
                    onClick={next}
                    aria-label="Next champion"
                    className="p-2 cursor-pointer text-gray-700 bg-gray-200 md:size-16 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-white  hover:bg-primary-accent"
                  >
                    <FaChevronRight className="w-5 h-5 " />
                  </button>
                </div>
              </div>
            </div>

            {/* IMAGE COLUMN */}
            <div className="lg:w-1/2 px-4 mt-8 relative lg:mt-0 flex w-full justify-center">
              <div className="absolute scale-150 xl:scale-200 bottom-0 right-0    h-full">
                <Image
                  src="/trophy.jpg"
                  alt="trophy"
                  width={700}
                  height={1000}
                  className="opacity-10   object-cover"
                />
              </div>
              <div className="relative aspect-square size-full min-w-[350px]">
                
                {/* Champion Image */}
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    className="absolute z-20 inset-[17%]"
                  >
                    {/* adjust inset % to fit inside your frame */}
                    <Image
                      src={slide.image}
                      alt={slide.name}
                      fill
                      className="object-cover aspect-square rounded-lg "
                    />
                  </m.div>
                </AnimatePresence>

                {/* Frame Overlay */}
                <Image
                  src="/champions-frame-2.png"
                  alt="Champion Frame"
                  fill
                  className="object-contain pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* PAGINATION DOTS */}
          <div className="mt-8 flex justify-center space-x-3">
            {champions.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to champion ${i + 1}`}
                className={`w-3 h-3 cursor-pointer rounded-full transition ${
                  i === idx
                    ? "bg-primary-accent"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </Container>
      </FadeIn>
    </section>
  );
}
