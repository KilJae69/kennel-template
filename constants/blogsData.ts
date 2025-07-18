// app/data/blogsData.ts

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string };

export type Blog = {
  slug: string;
  title: string;
  intro: string;
  publishDate: string; // ISO date
  category: string;
  tags: string[];       // e.g. ["latest","popular"]
  featuredImage: string;
  secondaryImage: string;
  content: ContentBlock[];
};

export const blogs: Blog[] = [
  {
    slug: "top-10-sneaker-trends-2025",
    title: "Top 10 Show-Ring Handling Tips for 2025",
    intro:
      "Master the ring from gaiting to stack—these ten practical handling tips will give you and your Pembroke Welsh Corgi the competitive edge this season.",
    publishDate: "2025-06-07",
    category: "Show Handling",
    tags: ["latest", "popular"],
    featuredImage: "/images/blog/blog-1-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      { type: "heading", text: "1. Perfect Your Stack" },
      {
        type: "paragraph",
        text: "Practice your dog’s stance (stack) daily. Use a small mat so your corgi learns exactly where to place each paw."
      },
      { type: "heading", text: "2. Smooth Gait Transitions" },
      {
        type: "paragraph",
        text: "Work on accelerating and decelerating—your dog should maintain drive and balance at all paces without breaking stride."
      },
      { type: "heading", text: "3. Controlled Exit and Entry" },
      {
        type: "paragraph",
        text: "When coming off the table, keep a firm but gentle hand so your corgi doesn’t rush or hesitate."
      },
      { type: "heading", text: "4. Eye Contact & Focus" },
      {
        type: "paragraph",
        text: "Use light treats or toys near the judge to keep your dog’s attention on you, not the row of spectators."
      },
      { type: "heading", text: "5. Confident Lead Handling" },
      {
        type: "paragraph",
        text: "Keep the lead loose but controlled. A slight tap signals direction without restricting your dog’s movement."
      }
    ]
  },

  {
    slug: "how-to-clean-your-sneakers",
    title: "How to Groom Your Corgi for the Show Ring",
    intro:
      "A picture-perfect corgi starts with meticulous grooming. Follow our step-by-step routine—from coat conditioning to nail trims—to shine under the judge’s lamp.",
    publishDate: "2025-05-20",
    category: "Grooming & Prep",
    tags: ["latest"],
    featuredImage: "/images/blog/blog-2-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      { type: "heading", text: "Step 1: Coat Brushing & Dematting" },
      {
        type: "paragraph",
        text: "Work a slicker brush through the thick undercoat, then follow with a wide-tooth comb to remove any hidden mats."
      },
      { type: "heading", text: "Step 2: Bath & Conditioning" },
      {
        type: "paragraph",
        text: "Use a show-ring shampoo and finish with a light conditioner. Rinse thoroughly to avoid residue dulling the coat."
      },
      { type: "heading", text: "Step 3: Blow-Dry Technique" },
      {
        type: "paragraph",
        text: "Dry undercoat first on medium heat, then finish the topcoat with a high-velocity dryer to add lift and volume."
      },
      { type: "heading", text: "Step 4: Nail & Paw Care" },
      {
        type: "paragraph",
        text: "Trim nails blunt and buff edges. Tidy paw pads with a small scissors blade for a neat look on the table."
      },
      { type: "heading", text: "Step 5: Final Touches" },
      {
        type: "paragraph",
        text: "Spritz a light show coat spray to add a healthy sheen and settle any flyaways before entering the ring."
      }
    ]
  },

  {
    slug: "best-roster-of-summer-sneakers",
    title: "2025 Summer Corgi Show & Trial Calendar",
    intro:
      "Plan your summer around the biggest Pembroke Welsh Corgi events—from specialty shows to herding trials. Here are the dates and highlights you won’t want to miss.",
    publishDate: "2025-05-05",
    category: "Event Coverage",
    tags: ["popular"],
    featuredImage: "/images/blog/blog-3-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      { type: "heading", text: "June 12: Pacific Northwest Specialty" },
      {
        type: "paragraph",
        text: "Conformation, rally, and obedience classes—plus an all-breed herding demonstration at the PNW Fairgrounds."
      },
      { type: "heading", text: "July 4-5: Midwest Corgi Jubilee" },
      {
        type: "paragraph",
        text: "Two days of shows, junior handling, and agility. Don’t miss the corgi costume parade on July 4th."
      },
      { type: "heading", text: "August 20: National Corgi Herding Trial" },
      {
        type: "paragraph",
        text: "Test your dog’s instinct in sheep, ducks, and cattle. Entry opens in June—limited spots."
      },
      { type: "heading", text: "September 1: Eastern Regional Showcase" },
      {
        type: "paragraph",
        text: "Region’s top handlers compete for points toward the national rankings—culminates in Best of Breed awards."
      }
    ]
  },

  {
    slug: "sneaker-history-a-brief-overview",
    title: "A Brief History of Pembroke Corgi Competition",
    intro:
      "From the breed’s early days in Welsh herding fields to today’s international specialty rings, explore how the Pembroke Welsh Corgi earned its place in the show world.",
    publishDate: "2025-04-20",
    category: "Breed History",
    tags: ["popular"],
    featuredImage: "/images/blog/blog-4-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "1800s: Herding Origins"
      },
      {
        type: "paragraph",
        text: "Corgis were bred to nip at cattle heels—agility and stamina were prized long before formal shows existed."
      },
      {
        type: "heading",
        text: "1900s: First Corgi Specialties"
      },
      {
        type: "paragraph",
        text: "The first recognized corgi specialty in Britain (1934) laid the groundwork for modern judging standards."
      },
      {
        type: "heading",
        text: "1950s: AKC Recognition"
      },
      {
        type: "paragraph",
        text: "Pembrokes earned full AKC recognition in 1935; by mid-century, they dominated the Working Group."
      },
      {
        type: "heading",
        text: "2000s+: Global Rise"
      },
      {
        type: "paragraph",
        text: "International clubs and specialist judges have elevated breed quality—today’s champions trace back to key foundation stock."
      }
    ]
  },

  {
    slug: "how-to-spot-fake-sneakers",
    title: "How to Spot Responsible vs. Irresponsible Corgi Breeders",
    intro:
      "All breeders aren’t equal. Learn the red flags to watch for—so you can choose a healthy, ethical breeder and avoid puppy-mill pitfalls.",
    publishDate: "2025-04-02",
    category: "Breeder Advice",
    tags: ["latest"],
    featuredImage: "/images/blog/blog-5-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "Red Flag: No Health Clearances"
      },
      {
        type: "paragraph",
        text: "If parents lack OFA, CERF, or genetic testing, walk away—healthy lines start with documented screenings."
      },
      {
        type: "heading",
        text: "Red Flag: Overcrowded Kennels"
      },
      {
        type: "paragraph",
        text: "Puppies shouldn’t be raised in bare wire cages. Look for clean, home-based whelping areas."
      },
      {
        type: "heading",
        text: "Red Flag: No Socialization"
      },
      {
        type: "paragraph",
        text: "Good breeders begin Puppy Culture day-3 protocols—if they skip socialization, behavioral issues often follow."
      },
      {
        type: "heading",
        text: "Red Flag: No Written Contract"
      },
      {
        type: "paragraph",
        text: "A handshake isn’t enough. Insist on a detailed contract with health guarantees and spay/neuter terms."
      }
    ]
  },

  {
    slug: "sustainable-sneakers-on-the-rise",
    title: "Ethical Breeding Practices: Sustainable Corgi Lines",
    intro:
      "Sustainability isn’t just for eco-products. Discover breeding programs that prioritize health, temperament, and long-term genetic vigor.",
    publishDate: "2025-03-25",
    category: "Breeding Wisdom",
    tags: ["latest", "popular"],
    featuredImage: "/images/blog/blog-6-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "Genetic Diversity"
      },
      {
        type: "paragraph",
        text: "Responsible breeders avoid narrow gene pools—rotate studs and outcross when needed to maintain vitality."
      },
      {
        type: "heading",
        text: "Health-First Selection"
      },
      {
        type: "paragraph",
        text: "Priority #1 is joint, cardiac, and eye health—never sacrifice structure for color or coat."
      },
      {
        type: "heading",
        text: "Temperament Testing"
      },
      {
        type: "paragraph",
        text: "Puppies come from parents who excel in soundness, confidence, and trainability—key for show and family homes."
      }
    ]
  },

  {
    slug: "best-sneaker-storage-solutions",
    title: "Best Crate & Kennel Solutions for Show-Ring Corgis",
    intro:
      "Comfortable travel and home crates help your champion relax off-ring. We’ve vetted the top-rated models for safety, durability, and ease of use.",
    publishDate: "2025-03-05",
    category: "Equipment & Gear",
    tags: ["popular"],
    featuredImage: "/images/blog/blog-7-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "Lightweight Aluminum Crates"
      },
      {
        type: "paragraph",
        text: "Strong yet easy to carry—ideal for traveling between shows. Look for rails that double as table legs."
      },
      {
        type: "heading",
        text: "Soft-Sided Kennels"
      },
      {
        type: "paragraph",
        text: "Perfect for airline travel—ensure proper ventilation and reinforced stitching."
      },
      {
        type: "heading",
        text: "Home-Style Crate Cabinets"
      },
      {
        type: "paragraph",
        text: "Blend into your living room—top shelf storage keeps grooming supplies within reach."
      }
    ]
  },

  {
    slug: "streetwear-and-sneaker-collabs-2025",
    title: "Fun Corgi Costume Competitions & Parade Events",
    intro:
      "Beyond the ring, costume contests and corgi parades are fan favorites. Here’s where—and how—you can join the cutest corgi-dress spectacle of 2025.",
    publishDate: "2025-02-20",
    category: "Specialty Events",
    tags: ["latest"],
    featuredImage: "/images/blog/blog-8-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "March 15: Spring Blossom Parade"
      },
      {
        type: "paragraph",
        text: "Come in floral hats and pastel bandanas—prizes for Most Creative Spring Theme."
      },
      {
        type: "heading",
        text: "July 4: Stars & Stripes Costume Contest"
      },
      {
        type: "paragraph",
        text: "Red, white & blue corgi capes and tutus—flag belt buckles earn bonus points."
      },
      {
        type: "heading",
        text: "October 31: Corgi Halloween Howl"
      },
      {
        type: "paragraph",
        text: "Scary-cute competition—think pumpkin-themed outfits and spiderweb capes."
      }
    ]
  },

  {
    slug: "how-to-break-in-new-sneakers",
    title: "Introducing Your New Corgi to the Show World",
    intro:
      "Your puppy’s first foray into competition starts at home. These five smooth steps will set them on track for a lifetime of confident ring performances.",
    publishDate: "2025-02-01",
    category: "Show Handling",
    tags: ["latest"],
    featuredImage: "/images/blog/blog-9-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "1. Early Table Manners" },
      {
        type: "paragraph",
        text: "Introduce the grooming table with calm praise—short sessions building positive associations."
      },
      {
        type: "heading",
        text: "2. Ring Sound Acclimation" },
      {
        type: "paragraph",
        text: "Play recorded ring noise and practice your dog’s stack and gait at home."
      },
      {
        type: "heading",
        text: "3. Formal Lead Introduction" },
      {
        type: "paragraph",
        text: "Use a thin show lead from day one so your corgi learns to work with it rather than against it."
      },
      {
        type: "heading",
        text: "4. Puppy Socialization Meetups" },
      {
        type: "paragraph",
        text: "Arrange small-group play dates on a matted surface to mirror show ring footing."
      },
      {
        type: "heading",
        text: "5. Positive Ring Entries" },
      {
        type: "paragraph",
        text: "Celebrate every first ring experience with treats and brief runs in an empty ring before crowds arrive."
      }
    ]
  },

  {
    slug: "sneaker-investment-guide-2025",
    title: "Investing in Champion Bloodlines: Rarest Corgi Lines",
    intro:
      "Looking for the next backyard superstar? These historic and emerging corgi lines offer proven genetics, performance records, and show-ring excellence.",
    publishDate: "2025-01-15",
    category: "Breeding Insights",
    tags: ["popular"],
    featuredImage: "/images/blog/blog-10-featured.jpg",
    secondaryImage: "/images/blog/blog-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "Line 1: Royal Crest Kennel" },
      {
        type: "paragraph",
        text: "Known for consistent Best of Breed wins—outcrosses yield strong bone and balanced movement."
      },
      {
        type: "heading",
        text: "Line 2: Silvermoon Studs" },
      {
        type: "paragraph",
        text: "Exceptional toplines and front assembly—progeny excel in both conformation and performance events."
      },
      {
        type: "heading",
        text: "Line 3: Highland Heritage" },
      {
        type: "paragraph",
        text: "Focus on temperament and versatility—champions from this line flourish in herding trials and therapy work."
      }
    ]
  }
];
