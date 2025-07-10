"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionTitle from "@/components/shared/SectionTitle";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { familyHistory } from "@/constants/familyHistoryTimeline";

export default function HistoryFamilySection({
  timeline,
  text,
  accentText,
}: {
  timeline: familyHistory[];
  text: string;
  accentText: string;
}) {
  const [current, setCurrent] = useState(timeline[timeline.length - 1].value);
  const active = timeline.find((t) => t.value === current) || timeline[0];
console.log(text,accentText);
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
              <SectionTitle text={text} accentText={accentText} />

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
                <TabsContent
                  key={item.value}
                  value={item.value}
                  className="space-y-4"
                >
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
