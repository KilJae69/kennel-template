"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionTitle from "@/components/shared/SectionTitle";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const timeline = [
  {
    value: "2010",
    label: "2010",
    content:
      "Jane & John Smith founded Maple Grove Kennel on a small Ohio farm. Their vision was to breed corgis of exceptional health, temperament, and structure—combining rigorous genetic testing with hands-on puppy socialization.",
    img: "/images/about/history-1.jpg",
  },
  {
    value: "2012",
    label: "2012",
    content:
      "By 2012, our very first litter set a new standard: pups exhibiting confident personalities, correct conformation, and early drive. Local judges took note, and eager families awaited each new arrival.",
    img: "/images/about/history-2.jpg",
  },
  {
    value: "2018",
    label: "2018",
    content:
      "A milestone year—Maple Grove Duke captured Best of Breed at the State Fair of Ohio. This victory validated our breeding principles and propelled us onto the national show circuit.",
    img: "/images/about/history-3.jpg",
  },
  {
    value: "2022",
    label: "2022",
    content:
      "We enrolled in the Bred with H.E.A.R.T. program and began comprehensive OFA, CHIC, and genetic DNA screening for every breeding dog. Transparency and health became core to our promise.",
    img: "/images/about/history-4.jpg",
  },
  {
    value: "now",
    label: "Now",
    content:
      "Today, three generations later, Maple Grove Kennel boasts over 50 champion titles, 300+ puppies in loving homes, and a legacy that spans three generations. Our family’s passion for the breed continues to grow.",
    img: "/images/about/history-5.jpg",
  },
];

export default function HistoryFamilySection() {
  const [current, setCurrent] = useState(timeline[timeline.length - 1].value);
  const active = timeline.find((t) => t.value === current) || timeline[0];

  return (
    <section className="bg-white my-16 lg:my-28">
      <Container>
        <FadeIn>
          <Tabs
            value={current}
            onValueChange={setCurrent}
            className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24"
          >
            {/* Left: tabs + text */}
            <div className="lg:w-1/2 space-y-8">
              <SectionTitle text="History" accentText="& Family" />

              <TabsList className="flex sm:space-x-6">
                {timeline.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    value={item.value}
                    className="flex-shrink-0 text-md py-4 whitespace-nowrap"
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {timeline.map((item) => (
                <TabsContent key={item.value} value={item.value} className="space-y-4">
                  <p className="text-paragraph">{item.content}</p>
                </TabsContent>
              ))}
            </div>

            {/* Right: image */}
            <div className="lg:w-1/2 relative aspect-video min-h-[300px] w-full">
              <AnimatePresence mode="wait">
                <m.div
                  key={active.value}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.img}
                    alt={active.label}
                    fill
                    sizes="(min-width: 1840px) 770px, (min-width: 1500px) calc(31.25vw + 201px), (min-width: 1040px) calc(39.09vw + 81px), (min-width: 460px) calc(100vw - 32px), 392px"
                    className="rounded-2xl object-cover"
                    priority
                  />
                </m.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </FadeIn>
      </Container>
    </section>
  );
}
