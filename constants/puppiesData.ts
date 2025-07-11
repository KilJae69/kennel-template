// src/constants/puppies.ts
export type Puppy = {
  id: string      // internal key
  slug: string    // URL segment, e.g. `/puppies/${slug}`
  name: string
  gender: "Male" | "Female"
  desc: string    // short bio teaser
  image: string   // relative path under `/public`
}

export const puppies: Puppy[] = [
  {
    id: "parker",
    slug: "parker",
    name: "Parker",
    gender: "Male",
    desc: "Intelligent and inquisitive—always the first to explore a new corner of the yard.",
    image: "/images/puppies/dog-1.jpg",
  },
  {
    id: "bear",
    slug: "bear",
    name: "Bear",
    gender: "Male",
    desc: "Laid-back sweetheart who loves belly rubs and naps in sunbeams.",
    image: "/images/puppies/dog-2.jpg",
  },
  {
    id: "hazel",
    slug: "hazel",
    name: "Hazel",
    gender: "Female",
    desc: "Gentle and affectionate—will curl up in your lap at the drop of a hat.",
    image: "/images/puppies/dog-3.jpg",
  },
  {
    id: "maple",
    slug: "maple",
    name: "Maple",
    gender: "Female",
    desc: "Playful little firecracker—loves chasing leaves and squeaky toys.",
    image: "/images/puppies/dog-4.jpg",
  },
  {
    id: "brownie",
    slug: "brownie",
    name: "Brownie",
    gender: "Female",
    desc: "Calm observer with a heart of gold—always by your side to comfort and cuddle.",
    image: "/images/puppies/dog-5.jpg",
  },
  {
    id: "silver",
    slug: "silver",
    name: "Silver",
    gender: "Male",
    desc: "Curious adventurer—he’ll keep you on your toes with his boundless energy.",
    image: "/images/puppies/dog-6.jpg",
  },
];
