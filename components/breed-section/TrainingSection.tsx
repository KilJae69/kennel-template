// components/about/TrainingsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Scissors, Home, Bone, Pill, Heart, Dumbbell } from "lucide-react";

export interface TrainingItem {
  id: string;
  title: string;
  description: string;
  image: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const trainings: TrainingItem[] = [
  {
    id: "care",
    title: "Care",
    description:
      "Professional grooming to keep your corgi’s coat clean, healthy and mat-free—from gentle brushing to expert trimming.",
    image: "/images/trainings/care.jpg",
    Icon: Scissors,
  },
  {
    id: "keeping",
    title: "Keeping",
    description:
      "Safe and comfortable boarding designed around corgi needs—plenty of playtime, cozy bedding, and loving supervision.",
    image: "/images/trainings/keeping.jpg",
    Icon: Home,
  },
  {
    id: "food",
    title: "Food",
    description:
      "Balanced nutrition plans featuring premium proteins and whole grains, tailored to support your corgi’s energy and growth.",
    image: "/images/trainings/food.jpg",
    Icon: Bone,
  },
  {
    id: "vitamins",
    title: "Vitamins",
    description:
      "Vet-approved supplements to fill any dietary gaps—joint support, skin & coat health, and daily multivitamins.",
    image: "/images/trainings/vitamins.jpg",
    Icon: Pill,
  },
  {
    id: "health",
    title: "Health",
    description:
      "Comprehensive wellness checks and preventative care to catch issues early and keep your corgi thriving year after year.",
    image: "/images/trainings/health.jpg",
    Icon: Heart,
  },
  {
    id: "exercise",
    title: "Exercise",
    description:
      "Fun agility courses and daily fitness routines to keep your corgi mentally stimulated and physically strong.",
    image: "/images/trainings/exercise.jpg",
    Icon: Dumbbell,
  },
];

export default function TrainingsSection() {
  return (
    <section className="my-16 lg:my-28">
      <Container>
        {/* Section Header */}
        <SectionTitle text="Food." accentText="Trainings" />

        <div className="space-y-24 mt-12">
          {trainings.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = item.Icon;
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
              >
                {/* image first on even, text first on odd */}
                {isEven && (
                  <div className="relative">
                    {/* icon + line */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                      <Icon className="w-6 h-6 text-primary-accent mb-2" />
                      <div className="w-px h-32 bg-primary-accent" />
                    </div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={700}
                      height={450}
                      className="rounded-2xl object-cover w-full"
                      priority
                    />
                  </div>
                )}

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-primary-accent">
                    {item.title}
                  </h3>
                  <p className="text-paragraph">{item.description}</p>
                  <Link
                    href={`/trainings#${item.id}`}
                    className="inline-block font-medium text-primary-accent hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>

                {!isEven && (
                  <div className="relative">
                    {/* icon + line on right */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                      <Icon className="w-6 h-6 text-primary-accent mb-2" />
                      <div className="w-px h-32 bg-primary-accent" />
                    </div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={700}
                      height={450}
                      className="rounded-2xl object-cover w-full"
                      priority
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
