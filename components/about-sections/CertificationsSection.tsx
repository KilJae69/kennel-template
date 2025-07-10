"use client"

import { useState } from "react"

import { Container } from "@/components/shared/Container"
import { FadeIn } from "@/components/shared/FadeIn"
import SectionTitle from "@/components/shared/SectionTitle"

import BadgeOverlayCard from "./BadgeOverlayCard"

const badges = [
  {
    id: "akc-bom",
    image: "/images/badges/AKC_BOM_logo-2.png", // Standard BOM logo
    subtitle: "AKC Breeder of Merit",
    description: "Recognized by the American Kennel Club for demonstrating a commitment to health screenings, AKC event participation, and responsible breeding practices.",
  },
  {
    id: "akc-platinum",
    image: "/images/badges/BOM-Platinum.png", // Platinum version
    subtitle: "AKC Breeder of Merit – Platinum",
    description: "Our highest AKC recognition, awarded to breeders who exceed standard requirements with additional health testing, mentorship programs, and championship titles.",
  },
  {
    id: "ofa-chic",
    image: "/images/badges/OFA-CHIC.png",
    subtitle: "Lifetime Health Testing",
    description: "All breeding dogs complete OFA certifications for hips, elbows, and cardiac health, registered with CHIC for ongoing transparency.",
  },
  {
    id: "bred-with-heart",
    image: "/images/badges/BWH.png",
    subtitle: "Bred with H.E.A.R.T.",
    description: "AKC's program honoring our commitment to health testing, education, accountability, responsible practices, and tradition.",
  }
]

export default function CertificationsSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="bg-white my-16 lg:my-28">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
            {/* ← LEFT */}
            <div className="space-y-6">
              <SectionTitle text="Certifications" accentText="& Partnerships" />
              <p className="text-paragraph">
                We hold ourselves to the very highest standards of canine health
                and ethics. From orthopedic screening to multiple levels of AKC
                recognition, each badge here represents years of testing,
                education, and transparent breeding practices.
              </p>
             
            </div>

            {/* → RIGHT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-2">
              {badges.map((b) => (
                 <div key={b.id} className="flex justify-center">

                <BadgeOverlayCard
                
                  id={b.id}
                  image={b.image}
                  subtitle={b.subtitle}
                  description={b.description}
                  activeId={activeId}
                  onToggle={setActiveId}
                  />
                  </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
