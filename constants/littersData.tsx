
export type Litter = {
  id: string
  title: string
  sire: {
    name: string
    titles: string[]
    image: string
    age: number
    recentAwards: string[]
  }
  dam: {
    name: string
    titles: string[]
    image: string
    age: number
    recentAwards: string[]
  }
  breed: string
  birthDate?: string
  expectedDate?: string
  puppyCount: number
  availablePuppies?: number
  status: "upcoming" | "available" | "sold-out" | "reserved"
  healthTesting: string[]
  registrations: string[]
  description: string
  price?: string
  contactEmail: string
  contactPhone: string
  expectedTraits: string[]
}

export const corgiLitters:Litter[] = [
    {
      id: "royal-sunrise",
      title: "Royal Sunrise Litter",
      sire: {
        name: "Thor",
        titles: ["AKC Grand Champion", "Best of Breed Winner", "CHIC Certified"],
        image: "/images/champions/champion-1.jpg",
        age: 4,
        recentAwards: ["2024 State Fair Show - Best Veteran", "2023 National Corgi Specialty - Reserve Grand Champion"],
      },
      dam: {
        name: "Luna",
        titles: ["AKC Grand Champion", "Winners Bitch", "Group Placer"],
        image: "/images/champions/champion-3.jpg",
        age: 5,
        recentAwards: ["2025 Champions Cup - Group 2", "2024 Autumn Classic - Best of Breed"],
      },
      breed: "Pembroke Welsh Corgi",
      birthDate: "December 15, 2024",
      puppyCount: 6,
      availablePuppies: 2,
      status: "available",
      healthTesting: ["OFA Hips: Good", "OFA Eyes: Clear", "DM Clear", "EIC Clear", "vWD Clear"],
      registrations: ["AKC Full Registration", "CHIC Certified Parents"],
      description:
        "This exceptional litter combines Thor's powerful movement and solid temperament with Luna's elegant expression and show presence. Both parents are health tested champions with proven track records in the show ring. Puppies are being raised with Early Neurological Stimulation and extensive socialization.",
      price: "$2,200 - $2,800",
      contactEmail: "info@royalcorgis.com",
      contactPhone: "(555) 123-4567",
      expectedTraits: [
        "Excellent show potential",
        "Balanced movement and structure",
        "Confident, outgoing temperament",
        "Rich red and white coloring",
        "Strong herding instincts",
      ],
    },
    {
      id: "champions-legacy",
      title: "Champion's Legacy Litter",
      sire: {
        name: "Winston",
        titles: ["AKC Grand Champion", "Best of Winners", "DNA Certified"],
        image: "/images/champions/champion-7.jpg",
        age: 3,
        recentAwards: ["2025 Heartland Championship - Best of Breed", "2024 Pacific NW Classic - Best of Winners"],
      },
      dam: {
        name: "Bella",
        titles: ["AKC Grand Champion", "Best in Specialty", "Winners Bitch"],
        image: "/images/champions/champion-6.jpg",
        age: 4,
        recentAwards: ["2025 Legends Show - Best Veteran", "2024 Eastern Championship - Winners Bitch"],
      },
      breed: "Pembroke Welsh Corgi",
      expectedDate: "March 20, 2025",
      puppyCount: 5,
      status: "upcoming",
      healthTesting: ["OFA Cardiac: Normal", "Genetic DNA Panel: Clear", "OFA Patella: Normal", "CHIC Certified"],
      registrations: ["AKC Full Registration", "Champion Bloodlines"],
      description:
        "Highly anticipated breeding between two of our most successful show dogs. Winston's flashy movement and perfect topline combined with Bella's athletic frame and competitive spirit promise exceptional puppies with both show and companion potential.",
      price: "$2,500 - $3,200",
      contactEmail: "breeding@championcorgis.com",
      contactPhone: "(555) 987-6543",
      expectedTraits: [
        "Outstanding show quality",
        "Athletic build and movement",
        "Spirited, competitive nature",
        "Excellent coat quality",
        "Strong breed type",
      ],
    },
    {
      id: "silver-dreams",
      title: "Silver Dreams Litter",
      sire: {
        name: "Silver",
        titles: ["AKC Grand Champion", "Best of Breed", "CHIC Certified"],
        image: "/images/champions/champion-1.jpg",
        age: 4,
        recentAwards: ["2024 State Fair Show - Best Veteran", "2023 National Corgi Specialty - Reserve Grand Champion"],
      },
      dam: {
        name: "Hazel",
        titles: ["AKC Grand Champion", "Winners Bitch", "Group Placer"],
        image: "/images/champions/champion-3.jpg",
        age: 5,
        recentAwards: ["2025 Champions Cup - Group 2", "2024 Autumn Classic - Best of Breed"],
      },
      breed: "Pembroke Welsh Corgi",
      birthDate: "October 8, 2024",
      puppyCount: 7,
      availablePuppies: 0,
      status: "sold-out",
      healthTesting: ["OFA Hips: Good", "OFA Elbows: Normal", "OFA Eyes: Clear", "Full Genetic Panel: Clear"],
      registrations: ["AKC Full Registration", "Champion Pedigree"],
      description:
        "This outstanding litter has found wonderful homes with families who appreciate the Corgi's intelligence, loyalty, and herding heritage. All puppies were placed with approved homes and are thriving in their new families.",
      price: "SOLD OUT",
      contactEmail: "info@silverdreamscorgis.com",
      contactPhone: "(555) 456-7890",
      expectedTraits: [
        "Excellent temperament",
        "Strong herding instincts",
        "Beautiful coat and color",
        "Balanced structure",
        "Family-friendly nature",
      ],
    },
  ] 