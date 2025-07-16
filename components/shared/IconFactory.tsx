// src/lib/iconFactory.tsx
"use client"

import {
  Ribbon,
  Trophy,
  Heart,
  Medal,
  Dna,
  BadgeCheck,

  Baby,
  TestTube2,
} from "lucide-react"
import { AiFillSafetyCertificate } from "react-icons/ai"
import type { IconKey } from "@/constants/championsData"

const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  showsEntered: Ribbon,
  bestOfBreed: Trophy,
  ribbons: Heart,
  stud: TestTube2,
  showAppearances: Medal,
  breedingConsultations: BadgeCheck,
  akcGrandChampion: Medal,
  dnaCertified: Dna,
  ofaCertified: AiFillSafetyCertificate,
  breedingProspects: Baby,
  trainingDemos: AiFillSafetyCertificate,
}

export function IconFactory({
  name,
  className,
}: {
  name: IconKey
  className?: string
}) {
  const Icon = iconMap[name]
  return <Icon className={className} />
}
