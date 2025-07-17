// src/constants/litters.ts


import { Champion, champions } from "./championsData";

export type LitterStatus = "upcoming" | "available" | "sold-out" | "reserved";
export type PuppyStatus = "available" | "reserved" | "sold";
export type GalleryCategory = "puppies" | "parents" | "ultrasound" | "development";

export type Puppy = {
  id: string;
  slug:string;
  name: string;
  gender: "Male" | "Female";
  color?: string;
  weight?: string;
  status?: PuppyStatus;
  image: string;
  desc: string;
}



export type TimelineEvent = {
  date: string;
  milestone: string;
  description: string;
  completed: boolean;
}

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
}

export type ContactInfo = {
  email: string;
  phone: string;
  location: string;
}

export type Litter = {
  id: string;
  slug: string;
  title: string;
  sire: Champion;
  dam: Champion;
  breed: string;
  birthDate?: string;
  expectedDate?: string;
  puppyCount: number;
  availablePuppies?: number;
  status: LitterStatus;
  healthTesting: string[];
  registrations: string[];
  description: string;
  price?: string;
  contactInfo: ContactInfo;
  expectedTraits: string[];
  terms: string[];
  gallery: GalleryImage[];
  timeline?: TimelineEvent[];
  puppies?: Puppy[];
}

export const litters: Litter[] = [
  {
    id: "royal-sunrise",
    slug: "royal-sunrise",
    title: "Royal Sunrise Litter",
    sire: champions.find(c => c.slug === "thor")!,
    dam: champions.find(c => c.slug === "luna")!,
    breed: "Pembroke Welsh Corgi",
    birthDate: "December 15, 2024",
    puppyCount: 6,
    availablePuppies: 3,
    status: "available",
    healthTesting: ["OFA Hips: Good", "OFA Eyes: Clear", "DM Clear", "EIC Clear", "vWD Clear"],
    registrations: ["AKC Full Registration", "CHIC Certified Parents"],
    description: "This exceptional litter combines Thor's powerful movement and solid temperament with Luna's elegant expression and show presence. Both parents are health tested champions with proven track records in the show ring. Puppies are being raised with Early Neurological Stimulation and extensive socialization.",
    price: "$2,200 - $2,800",
    contactInfo: {
      email: "info@royalcorgis.com",
      phone: "(555) 123-4567",
      location: "Portland, OR"
    },
    expectedTraits: [
      "Excellent show potential",
      "Balanced movement and structure",
      "Confident, outgoing temperament",
      "Rich red and white coloring",
      "Strong herding instincts",
    ],
    terms: [
      "Deposit required to reserve puppy",
      "Health guarantee provided",
      "Spay/neuter contract for pet homes",
      "AKC limited registration for pet homes",
      "Must pass screening interview"
    ],
    gallery: [
      {
        id: "1",
        src: "https://images.unsplash.com/photo-1652799527970-a989cba52934?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams puppy 1",
        caption: "Puppy at 8 weeks",
        category: "puppies"
      },
      {
        id: "2",
        src: "https://images.unsplash.com/photo-1653760188729-894d6518581e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams puppy 2",
        caption: "Puppy at 8 weeks",
        category: "puppies"
      },
      {
        id: "3",
        src: "https://images.unsplash.com/photo-1628344806892-11873eba7974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvcmdpfGVufDB8fDB8fHwy",
        alt: "Silver Dreams litter",
        caption: "Full litter at 6 weeks",
        category: "puppies"
      },
      {
        id: "4",
        src: "https://images.unsplash.com/photo-1636910824828-c4b5efb93e21?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams litter",
        caption: "Full litter at 6 weeks",
        category: "puppies"
      },
      {
        id: "5",
        src: "https://images.unsplash.com/photo-1622065713075-a5e28dcc802c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams puppy 1",
        caption: "Puppy at 8 weeks",
        category: "puppies"
      },
      {
        id: "6",
        src: "https://images.unsplash.com/photo-1731315100519-b5ac081644f7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams puppy 2",
        caption: "Puppy at 8 weeks",
        category: "puppies"
      },
      {
        id: "7",
        src: "https://images.unsplash.com/photo-1622820020729-2839a36db400?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams litter",
        caption: "Full litter at 6 weeks",
        category: "puppies"
      },
      {
        id: "8",
        src: "https://images.unsplash.com/photo-1557973989-4ea43af05a91?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams litter",
        caption: "Full litter at 6 weeks",
        category: "puppies"
      }
    ],
    timeline: [
      {
        date: "December 15, 2024",
        milestone: "Birth",
        description: "Litter born - 3 males, 3 females",
        completed: false
      },
      {
        date: "December 18, 2024",
        milestone: "First Vet Check",
        description: "Initial health check and dewclaw removal",
        completed: false
      },
      {
        date: "January 5, 2025",
        milestone: "Early Neurological Stimulation",
        description: "ENS program begins",
        completed: false
      }
    ],
    puppies: [
      {
        id: "rs1",
        slug:"parker",
        name: "Parker",
        gender: "Male",
        color: "Red & White",
        weight: "3.2 lbs",
        status: "available",
        image: "/images/puppies/dog-1.jpg",
        desc: "Intelligent and inquisitive—always the first to explore a new corner of the yard."
      },
      {
        id: "rs2",
        slug:"hazel",
        name: "Hazel",
        gender: "Female",
        color: "Red & White",
        weight: "2.9 lbs",
        status: "available",
        image: "/images/puppies/dog-2.jpg",
        desc: "Gentle and affectionate—will curl up in your lap at the drop of a hat."
      },
      {
        id: "rs3",
        slug:"brownie",
        name: "Brownie",
        gender: "Female",
        color: "Red & White",
        weight: "2.9 lbs",
        status: "available",
        image: "/images/puppies/dog-3.jpg",
        desc: "Calm observer with a heart of gold—always by your side to comfort and cuddle."
      }
    ]
  },
  {
    id: "champions-legacy",
    slug: "champions-legacy",
    title: "Champion's Legacy Litter",
    sire: champions.find(c => c.slug === "winston")!,
    dam: champions.find(c => c.slug === "bella")!,
    breed: "Pembroke Welsh Corgi",
    expectedDate: "September 20, 2025",
    puppyCount: 5,
    status: "upcoming",
    healthTesting: ["OFA Cardiac: Normal", "Genetic DNA Panel: Clear", "OFA Patella: Normal", "CHIC Certified"],
    registrations: ["AKC Full Registration", "Champion Bloodlines"],
    description: "Highly anticipated breeding between two of our most successful show dogs. Winston's flashy movement and perfect topline combined with Bella's athletic frame and competitive spirit promise exceptional puppies with both show and companion potential.",
    price: "$2,500 - $3,200",
    contactInfo: {
      email: "breeding@championcorgis.com",
      phone: "(555) 987-6543",
      location: "Seattle, WA"
    },
    expectedTraits: [
      "Outstanding show quality",
      "Athletic build and movement",
      "Spirited, competitive nature",
      "Excellent coat quality",
      "Strong breed type",
    ],
    terms: [
      "Deposit required to join waiting list",
      "Show potential puppies may have different terms",
      "Health guarantee provided",
      "AKC registration included",
      "Must pass breeder interview"
    ],
    gallery: [
      
    ]
  },
  {
    id: "silver-dreams",
    slug: "silver-dreams",
    title: "Silver Dreams Litter",
    sire: champions.find(c => c.slug === "silver")!,
    dam: champions.find(c => c.slug === "hazel")!,
    breed: "Pembroke Welsh Corgi",
    birthDate: "October 8, 2024",
    puppyCount: 7,
    availablePuppies: 0,
    status: "sold-out",
    healthTesting: ["OFA Hips: Good", "OFA Elbows: Normal", "OFA Eyes: Clear", "Full Genetic Panel: Clear"],
    registrations: ["AKC Full Registration", "Champion Pedigree"],
    description: "This outstanding litter has found wonderful homes with families who appreciate the Corgi's intelligence, loyalty, and herding heritage. All puppies were placed with approved homes and are thriving in their new families.",
    price: "SOLD OUT",
    contactInfo: {
      email: "info@silverdreamscorgis.com",
      phone: "(555) 456-7890",
      location: "San Francisco, CA"
    },
    expectedTraits: [
      "Excellent temperament",
      "Strong herding instincts",
      "Beautiful coat and color",
      "Balanced structure",
      "Family-friendly nature",
    ],
    terms: [
      "All puppies placed",
      "Health guarantees provided",
      "Follow-up support ongoing",
      "New owners receive care packages"
    ],
    gallery: [
      {
        id: "1",
        src: "https://images.unsplash.com/photo-1652799527970-a989cba52934?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams puppy 1",
        caption: "Puppy at 8 weeks",
        category: "puppies"
      },
      {
        id: "2",
        src: "https://images.unsplash.com/photo-1653760188729-894d6518581e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams puppy 2",
        caption: "Puppy at 8 weeks",
        category: "puppies"
      },
      {
        id: "3",
        src: "https://images.unsplash.com/photo-1628344806892-11873eba7974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvcmdpfGVufDB8fDB8fHwy",
        alt: "Silver Dreams litter",
        caption: "Full litter at 6 weeks",
        category: "puppies"
      },
      {
        id: "4",
        src: "https://images.unsplash.com/photo-1636910824828-c4b5efb93e21?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams litter",
        caption: "Full litter at 6 weeks",
        category: "puppies"
      },
      {
        id: "5",
        src: "https://images.unsplash.com/photo-1622065713075-a5e28dcc802c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams puppy 1",
        caption: "Puppy at 8 weeks",
        category: "puppies"
      },
      {
        id: "6",
        src: "https://images.unsplash.com/photo-1731315100519-b5ac081644f7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams puppy 2",
        caption: "Puppy at 8 weeks",
        category: "puppies"
      },
      {
        id: "7",
        src: "https://images.unsplash.com/photo-1622820020729-2839a36db400?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams litter",
        caption: "Full litter at 6 weeks",
        category: "puppies"
      },
      {
        id: "8",
        src: "https://images.unsplash.com/photo-1557973989-4ea43af05a91?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Silver Dreams litter",
        caption: "Full litter at 6 weeks",
        category: "puppies"
      }
    ],
    puppies: [
     
    ]
  }
];

export const litterCategories = [
  { id: "all", name: "All Litters" },
  { id: "available", name: "Available" },
  { id: "upcoming", name: "Upcoming" },
  { id: "sold-out", name: "Previous Litters" }
];