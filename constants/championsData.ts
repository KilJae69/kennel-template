// src/constants/champions.ts

import { IconType } from "react-icons/lib";
import { Puppy } from "./puppiesData";
import { 
  Medal, 
  Dna, 
  BadgeCheck, 
  HeartPulse, 
  
 
  Baby,
  TestTube2
} from "lucide-react";
import { AiFillSafetyCertificate } from "react-icons/ai";




export type Champion = Puppy & {
  /** Age in years */
  age: number;
  /** Major titles won, in chronological order */
  titles: {
    year: number;
    event: string;
    award: string;
    image:string;
  }[];
  /** Aggregate show statistics */
  stats: {
    showsEntered: number;
    ribbons: number;
    bestOfBreed: number;
  };
  /** Health clearances & certifications */
  healthCerts: string[];
   availableFor: {
    label: string;
    icon: IconType;
    color: string;
  }[];
  
  currentStatus: {
    label: string;
    icon: IconType;
    color: string;
  }[];
};

export const champions: Champion[] = [
  {
    id: "thor",
    slug: "thor",
    name: "Thor",
    gender: "Male",
    availableFor: [
      { 
        label: "Stud Services", 
        icon: TestTube2, 
        color: "text-blue-500" 
      },
      { 
        label: "Show Appearances", 
        icon: Medal, 
        color: "text-yellow-500" 
      },
      { 
        label: "Breeding Consultations", 
        icon: BadgeCheck, 
        color: "text-green-500" 
      }
    ],
    currentStatus: [
      { 
        label: "AKC Grand Champion", 
        icon: Medal, 
        color: "text-yellow-500" 
      },
      { 
        label: "DNA Certified", 
        icon: Dna, 
        color: "text-purple-500" 
      },
      { 
        label: "OFA Certified", 
        icon: AiFillSafetyCertificate, 
        color: "text-green-500" 
      }
    ],
    desc:
      "Powerhouse in the ring—Thor consistently commands attention with his balanced gait and rock-solid temperament.",
    image: "/images/champions/champion-1.jpg",
    age: 4,
    titles: [
      { year: 2022, event: "Midwest Classic", award: "Best of Breed",image:"/images/champions/competition-1.jpg" },
      { year: 2023, event: "National Corgi Specialty", award: "Reserve Grand Champion",image:"/images/champions/competition-2.jpg" },
      { year: 2024, event: "State Fair Show", award: "Best Veteran",image:"/images/champions/competition-3.jpg" },
    ],
    stats: {
      showsEntered: 25,
      ribbons: 18,
      bestOfBreed: 7,
    },
    healthCerts: ["OFA Hips: Good", "OFA Elbows: Normal", "CHIC #12345"],
  },
  {
    id: "winston",
    slug: "winston",
    name: "Winston",
    gender: "Male",
     availableFor: [
      { 
        label: "Stud Services", 
        icon: TestTube2, 
        color: "text-blue-500" 
      },
      { 
        label: "Show Appearances", 
        icon: Medal, 
        color: "text-yellow-500" 
      },
      { 
        label: "Breeding Consultations", 
        icon: BadgeCheck, 
        color: "text-green-500" 
      }
    ],
    currentStatus: [
      { 
        label: "AKC Grand Champion", 
        icon: Medal, 
        color: "text-yellow-500" 
      },
      { 
        label: "DNA Certified", 
        icon: Dna, 
        color: "text-purple-500" 
      },
      { 
        label: "OFA Certified", 
        icon: AiFillSafetyCertificate, 
        color: "text-green-500" 
      }
    ],
    desc:
      "Grace under pressure—Winston’s flashy movement and perfect topline have netted him top honors coast-to-coast.",
    image: "/images/champions/champion-7.jpg",
    age: 3,
    titles: [
      { year: 2024, event: "Pacific NW Classic", award: "Best of Winners",image:"/images/champions/competition-1.jpg" },
      { year: 2025, event: "Heartland Championship", award: "Best of Breed",image:"/images/champions/competition-2.jpg" },
    ],
    stats: {
      showsEntered: 18,
      ribbons: 14,
      bestOfBreed: 5,
    },
    healthCerts: ["OFA Cardiac: Normal", "Genetic DNA Panel: Clear", "CHIC #54321"],
  },
  {
    id: "luna",
    slug: "luna",
    name: "Luna",
    gender: "Female",
     availableFor: [
      { 
        label: "Breeding Prospects", 
        icon: Baby, 
        color: "text-pink-500" 
      },
      { 
        label: "Show Appearances", 
        icon: Medal, 
        color: "text-yellow-500" 
      },
      { 
        label: "Training Demonstrations", 
        icon: AiFillSafetyCertificate, 
        color: "text-blue-500" 
      }
    ],
    currentStatus: [
      { 
        label: "AKC Grand Champion", 
        icon: Medal, 
        color: "text-yellow-500" 
      },
      { 
        label: "DNA Profiled", 
        icon: Dna, 
        color: "text-purple-500" 
      },
      { 
        label: "OFA Certified", 
        icon: HeartPulse, 
        color: "text-red-500" 
      }
    ],
    desc:
      "Elegant and expressive—Luna’s flowing coat and confident showmanship have wowed judges from New York to Orlando.",
    image: "/images/champions/champion-3.jpg",
    age: 5,
    titles: [
      { year: 2022, event: "Southern Regional", award: "Best of Opposite Sex",image:"/images/champions/competition-1.jpg" },
      { year: 2023, event: "National Specialty", award: "Winners Bitch",image:"/images/champions/competition-2.jpg" },
      { year: 2024, event: "Autumn Classic", award: "Best of Breed",image:"/images/champions/competition-3.jpg" },
      { year: 2025, event: "Champions Cup", award: "Group 2",image:"/images/champions/competition-1.jpg" },
    ],
    stats: {
      showsEntered: 30,
      ribbons: 22,
      bestOfBreed: 8,
    },
    healthCerts: ["OFA Eyes: Clear", "OFA Patella: Normal", "CHIC #67890"],
  },
  {
    id: "bella",
    slug: "bella",
    name: "Bella",
    gender: "Female",
      availableFor: [
      { 
        label: "Breeding Prospects", 
        icon: Baby, 
        color: "text-pink-500" 
      },
      { 
        label: "Show Appearances", 
        icon: Medal, 
        color: "text-yellow-500" 
      },
      { 
        label: "Training Demonstrations", 
        icon: AiFillSafetyCertificate, 
        color: "text-blue-500" 
      }
    ],
    currentStatus: [
      { 
        label: "AKC Grand Champion", 
        icon: Medal, 
        color: "text-yellow-500" 
      },
      { 
        label: "DNA Profiled", 
        icon: Dna, 
        color: "text-purple-500" 
      },
      { 
        label: "OFA Certified", 
        icon: HeartPulse, 
        color: "text-red-500" 
      }
    ],
    desc:
      "True competitor—Bella’s athletic frame and spirited attitude have earned her multiple “Best in Specialty” titles.",
    image: "/images/champions/champion-6.jpg",
    age: 4,
    titles: [
      { year: 2023, event: "Spring Classic", award: "Best of Breed",image:"/images/champions/competition-1.jpg" },
      { year: 2024, event: "Eastern Championship", award: "Winners Bitch",image:"/images/champions/competition-2.jpg" },
      { year: 2025, event: "Legends Show", award: "Best Veteran",image:"/images/champions/competition-3.jpg" },
    ],
    stats: {
      showsEntered: 22,
      ribbons: 17,
      bestOfBreed: 6,
    },
    healthCerts: ["OFA Cardiac: Normal", "CHIC #98765"],
  },
];
