// src/constants/championsData.ts

import { Puppy } from "./litters";

export type IconKey =
  | "showsEntered"
  | "bestOfBreed"
  | "ribbons"
  | "stud"
  | "showAppearances"
  | "breedingConsultations"
  | "akcGrandChampion"
  | "dnaCertified"
  | "ofaCertified"
  | "breedingProspects"
  | "trainingDemos"

  export type Title = { year: number; event: string; award: string; image: string }

export type Champion = Puppy & {
  age: number
  titles: Title[]
  stats: {
    showsEntered: number
    ribbons: number
    bestOfBreed: number
  }
  healthCerts: string[]
  availableFor: { key: IconKey; label: string; color: string }[]
  currentStatus: { key: IconKey; label: string; color: string }[]
}

export const champions: Champion[] = [
  {
    id: "thor",
    slug: "thor",
    name: "Thor",
    gender: "Male",
    desc:
      "Powerhouse in the ring—Thor consistently commands attention with his balanced gait and rock-solid temperament.",
    image: "/images/champions/champion-1.jpg",
    age: 4,
    stats: { showsEntered: 25, ribbons: 18, bestOfBreed: 7 },
    healthCerts: ["OFA Hips: Good", "OFA Elbows: Normal", "CHIC #12345"],
    titles: [
      { year: 2022, event: "Midwest Classic", award: "Best of Breed", image: "/images/champions/competition-1.jpg" },
      { year: 2023, event: "National Corgi Specialty", award: "Reserve Grand Champion", image: "/images/champions/competition-2.jpg" },
      { year: 2024, event: "State Fair Show", award: "Best Veteran", image: "/images/champions/competition-3.jpg" },
    ],
    availableFor: [
      { key: "stud", label: "Stud Services", color: "text-blue-500" },
      { key: "showAppearances", label: "Show Appearances", color: "text-yellow-500" },
      { key: "breedingConsultations", label: "Breeding Consultations", color: "text-green-500" },
    ],
    currentStatus: [
      { key: "akcGrandChampion", label: "AKC Grand Champion", color: "text-yellow-500" },
      { key: "dnaCertified", label: "DNA Certified", color: "text-purple-500" },
      { key: "ofaCertified", label: "OFA Certified", color: "text-green-500" },
    ],
  },
  {
    id: "luna",
    slug: "luna",
    name: "Luna",
    gender: "Female",
    desc:
      "Elegant and expressive—Luna’s flowing coat and confident showmanship have wowed judges from New York to Orlando.",
    image: "/images/champions/champion-3.jpg",
    age: 5,
    stats: { showsEntered: 30, ribbons: 22, bestOfBreed: 8 },
    healthCerts: ["OFA Eyes: Clear", "OFA Patella: Normal", "CHIC #67890"],
    titles: [
      { year: 2022, event: "Southern Regional", award: "Best of Opposite Sex", image: "/images/champions/competition-1.jpg" },
      { year: 2023, event: "National Specialty", award: "Winners Bitch", image: "/images/champions/competition-2.jpg" },
      { year: 2024, event: "Autumn Classic", award: "Best of Breed", image: "/images/champions/competition-3.jpg" },
      { year: 2025, event: "Champions Cup", award: "Group 2", image: "/images/champions/competition-1.jpg" },
    ],
    availableFor: [
      { key: "breedingProspects", label: "Breeding Prospects", color: "text-pink-500" },
      { key: "showAppearances", label: "Show Appearances", color: "text-yellow-500" },
      { key: "trainingDemos", label: "Training Demonstrations", color: "text-blue-500" },
    ],
    currentStatus: [
      { key: "akcGrandChampion", label: "AKC Grand Champion", color: "text-yellow-500" },
      { key: "dnaCertified", label: "DNA Profiled", color: "text-purple-500" },
      { key: "ofaCertified", label: "OFA Certified", color: "text-red-500" },
    ],
  },
  {
    id: "winston",
    slug: "winston",
    name: "Winston",
    gender: "Male",
    desc:
      "Grace under pressure—Winston’s flashy movement and perfect topline have netted him top honors coast to coast.",
    image: "/images/champions/champion-7.jpg",
    age: 3,
    stats: { showsEntered: 18, ribbons: 14, bestOfBreed: 5 },
    healthCerts: ["OFA Cardiac: Normal", "Genetic DNA Panel: Clear", "CHIC #54321"],
    titles: [
      { year: 2024, event: "Pacific NW Classic", award: "Best of Winners", image: "/images/champions/competition-1.jpg" },
      { year: 2025, event: "Heartland Championship", award: "Best of Breed", image: "/images/champions/competition-2.jpg" },
    ],
    availableFor: [
      { key: "stud", label: "Stud Services", color: "text-blue-500" },
      { key: "showAppearances", label: "Show Appearances", color: "text-yellow-500" },
      { key: "breedingConsultations", label: "Breeding Consultations", color: "text-green-500" },
    ],
    currentStatus: [
      { key: "akcGrandChampion", label: "AKC Grand Champion", color: "text-yellow-500" },
      { key: "dnaCertified", label: "DNA Certified", color: "text-purple-500" },
      { key: "ofaCertified", label: "OFA Certified", color: "text-green-500" },
    ],
  },
  {
    id: "bella",
    slug: "bella",
    name: "Bella",
    gender: "Female",
    desc:
      "True competitor—Bella’s athletic frame and spirited attitude have earned her multiple “Best in Specialty” titles.",
    image: "/images/champions/champion-6.jpg",
    age: 4,
    stats: { showsEntered: 22, ribbons: 17, bestOfBreed: 6 },
    healthCerts: ["OFA Cardiac: Normal", "CHIC #98765"],
    titles: [
      { year: 2023, event: "Spring Classic", award: "Best of Breed", image: "/images/champions/competition-1.jpg" },
      { year: 2024, event: "Eastern Championship", award: "Winners Bitch", image: "/images/champions/competition-2.jpg" },
      { year: 2025, event: "Legends Show", award: "Best Veteran", image: "/images/champions/competition-3.jpg" },
    ],
    availableFor: [
      { key: "breedingProspects", label: "Breeding Prospects", color: "text-pink-500" },
      { key: "showAppearances", label: "Show Appearances", color: "text-yellow-500" },
      { key: "trainingDemos", label: "Training Demonstrations", color: "text-blue-500" },
    ],
    currentStatus: [
      { key: "akcGrandChampion", label: "AKC Grand Champion", color: "text-yellow-500" },
      { key: "dnaCertified", label: "DNA Profiled", color: "text-purple-500" },
      { key: "ofaCertified", label: "OFA Certified", color: "text-red-500" },
    ],
  },
  {
    id: "silver",
    slug: "silver",
    name: "Silver",
    gender: "Male",
    desc:
      "Energetic dynamo—Silver’s lightning-fast gait and playful spirit make him a crowd favorite at every ring.",
    image: "/images/champions/champion-2.jpg",
    age: 4,
    stats: { showsEntered: 28, ribbons: 20, bestOfBreed: 8 },
    healthCerts: ["OFA Hips: Good", "OFA Elbows: Normal", "CHIC #54321"],
    titles: [
      { year: 2022, event: "Midwest Classic", award: "Best of Breed", image: "/images/champions/competition-1.jpg" },
      { year: 2023, event: "National Corgi Specialty", award: "Reserve Grand Champion", image: "/images/champions/competition-2.jpg" },
      { year: 2024, event: "State Fair Show", award: "Best Veteran", image: "/images/champions/competition-3.jpg" },
    ],
    availableFor: [
      { key: "stud", label: "Stud Services", color: "text-blue-500" },
      { key: "showAppearances", label: "Show Appearances", color: "text-yellow-500" },
      { key: "breedingConsultations", label: "Breeding Consultations", color: "text-green-500" },
    ],
    currentStatus: [
      { key: "akcGrandChampion", label: "AKC Grand Champion", color: "text-yellow-500" },
      { key: "dnaCertified", label: "DNA Certified", color: "text-purple-500" },
      { key: "ofaCertified", label: "OFA Certified", color: "text-green-500" },
    ],
  },
  {
    id: "hazel",
    slug: "hazel",
    name: "Hazel",
    gender: "Female",
    desc:
      "Sweet show-stopper—Hazel’s gentle expression and impeccable form have earned her Best of Breed time and again.",
    image: "/images/champions/champion-4.jpg",
    age: 5,
    stats: { showsEntered: 30, ribbons: 22, bestOfBreed: 8 },
    healthCerts: ["OFA Eyes: Clear", "OFA Patella: Normal", "CHIC #67890"],
    titles: [
      { year: 2022, event: "Southern Regional", award: "Best of Opposite Sex", image: "/images/champions/competition-1.jpg" },
      { year: 2023, event: "National Specialty", award: "Winners Bitch", image: "/images/champions/competition-2.jpg" },
      { year: 2024, event: "Autumn Classic", award: "Best of Breed", image: "/images/champions/competition-3.jpg" },
      { year: 2025, event: "Champions Cup", award: "Group 2", image: "/images/champions/competition-1.jpg" },
    ],
    availableFor: [
      { key: "breedingProspects", label: "Breeding Prospects", color: "text-pink-500" },
      { key: "showAppearances", label: "Show Appearances", color: "text-yellow-500" },
      { key: "trainingDemos", label: "Training Demonstrations", color: "text-blue-500" },
    ],
    currentStatus: [
      { key: "akcGrandChampion", label: "AKC Grand Champion", color: "text-yellow-500" },
      { key: "dnaCertified", label: "DNA Profiled", color: "text-purple-500" },
      { key: "ofaCertified", label: "OFA Certified", color: "text-red-500" },
    ],
  },
]

export const championsCategories = [
  { id: "all", name: "All Champions" },
  { id: "Male", name: "Lads" },
  { id: "Female", name: "Lassies" },
]
