export type Testimonial = {
  id:number;
  text:string;
  name:string;
  role:string;
  event:string;
  avatarUrl:string;
}

export const judgeTestimonials:Testimonial[] = [
  {
    id: 1,
    text: "An exceptional specimen with flawless movement and perfect breed type. His powerful yet elegant gait commands attention in the ring, and his temperament is exactly what we look for in a champion. One of the finest examples of the breed I've judged this season.",
    name: "Margaret Whitmore",
    role: "AKC Licensed Judge",
    event: "National Corgi Specialty 2023",
    avatarUrl: "/images/users/judge-whitmore.png"
  },
  {
    id: 2,
    text: "What impressed me most was her beautiful topline and effortless movement. She carries herself with such confidence and grace, making the difficult look easy. Her coat condition and presentation were absolutely show-stopping.",
    name: "Robert Chen",
    role: "International All-Breed Judge",
    event: "Westminster Kennel Club 2024",
   avatarUrl: "/images/users/judge-chen.png"
  },
  {
    id: 3,
    text: "The perfect combination of substance and style. His bone structure is ideal for the breed, yet he moves with remarkable agility. What really stood out was his beautiful headpiece and expressive eyes - he has that 'look at me' quality that makes a true show dog.",
    name: "Elizabeth Fontaine",
    role: "Breed Specialist Judge",
    event: "American Corgi National 2023",
    avatarUrl: "/images/users/judge-fontaine.png"
  },
  {
    id: 4,
    text: "A complete package - excellent structure, gorgeous coat texture, and that extra spark of personality that makes a dog memorable. She was clearly having fun in the ring, which always enhances the presentation. A worthy representative of the breed standard.",
    name: "James O'Sullivan",
    role: "AKC Sporting Group Judge",
    event: "AKC National Championship 2025",
    avatarUrl: "/images/users/judge-osullivan.png"
  }
] ;

// sold out litter
export const adopterTestimonials: Testimonial[] = [
  {
    id: 1,
    text: "Our puppy from the Silver Dreams litter has exceeded all expectations. At 6 months old, she's already earned her AKC Junior Hunter title! Her intelligence and eagerness to please are a testament to the breeder's careful selection of working-line parents.",
    name: "The Martinez Family",
    role: "Performance Home",
    event: "Silver Dreams Litter 2024",
     avatarUrl: "/images/users/judge-whitmore.png"
  },
  {
    id: 2,
    text: "As first-time dog owners, we were nervous, but the breeder's puppy culture program made all the difference. Our boy from the Silver Dreams litter was practically house-trained when we brought him home. His calm temperament is perfect for our apartment life.",
    name: "Sophie & Ryan Kim",
    role: "Pet Home",
    event: "Silver Dreams Litter 2024",
    avatarUrl: "/images/users/judge-chen.png"
  },
  {
    id: 3,
    text: "After showing dogs for 15 years, I can confidently say this is one of the best-bred litters I've encountered. Our champion from the Silver Dreams litter finished her title in just 3 weekends. That perfect topline and movement come straight from her dam.",
    name: "Linda Patterson",
    role: "Show Home",
    event: "Silver Dreams Litter 2024",
    avatarUrl: "/images/users/judge-fontaine.png"
  },
  {
    id: 4,
    text: "Our therapy dog from the Silver Dreams litter brings so much joy to hospital patients. His stable temperament and intuitive nature were evident from day one. The breeder's socialization checklist clearly made an impact - nothing phases him!",
    name: "Dr. James Wilson",
    role: "Therapy Work",
    event: "Silver Dreams Litter 2024",
     avatarUrl: "/images/users/judge-osullivan.png"
  }
];

// Upcoming litter
export const healthProfessionalTestimonials: Testimonial[] = [
  {
    id: 5,
    text: "I've reviewed the OFA and genetic testing for both parents of the Champion's Legacy litter. Their hip scores (OFA Good/Excellent) and clear DM/VWD status represent the top 10% of the breed. These will be structurally sound puppies.",
    name: "Dr. Emily Rodriguez",
    role: "Veterinary Orthopedic Specialist",
    event: "OFA Evaluator #VMS-1542",
     avatarUrl: "/images/users/judge-whitmore.png"
  },
  {
    id: 6,
    text: "As the neurologist who evaluated the sire's BAER testing, I can confirm exceptional hearing symmetry (0.05 ms interpeak latency). The dam's thyroid panel is also textbook perfect. This breeding combines outstanding health metrics.",
    name: "Dr. Michael Chen",
    role: "Veterinary Neurologist",
    event: "BAER Testing Facility",
   avatarUrl: "/images/users/judge-chen.png"
  },
  {
    id: 7,
    text: "The dam's progesterone series was meticulously tracked, with optimal timing confirmed via ultrasound. As their reproductive specialist, I've never seen such comprehensive pre-breeding preparation - including semen analysis for the sire.",
    name: "Dr. Sarah Williamson",
    role: "Canine Reproduction Specialist",
    event: "Fertility Monitoring",
   avatarUrl: "/images/users/judge-fontaine.png"
  },
  {
    id: 8,
    text: "Both parents carry the ideal A/A genotype for coat texture and have passed all recommended genetic screens. As a genetic counselor, I particularly appreciate the breeder's transparency in sharing all test results with potential buyers.",
    name: "Dr. Rachel Park",
    role: "Veterinary Geneticist",
    event: "DNA Analysis #GX-8872",
    avatarUrl: "/images/users/judge-osullivan.png"
  }
];
// Available litter
export const previousBuyerTestimonials: Testimonial[] = [
  {
    id: 9,
    text: "We purchased a male from the parents' first litter and he's now a Grand Champion. The consistency in type across their litters is remarkable - we're getting a sister from this breeding to continue our show line.",
    name: "Mark & Diane Thompson",
    role: "Show Breeders",
    event: "Owners of GCH. Sundance Horizon",
    avatarUrl: "/images/users/judge-whitmore.png"
  },
  {
    id: 10,
    text: "Our service dog from their 2023 litter has changed our lives. His intelligence and biddability are exactly as described. We're on the waitlist again because the breeder's temperament evaluations were so accurate.",
    name: "Jason Miller",
    role: "Service Dog Handler",
    event: "Autumn Glory Litter 2023",
   avatarUrl: "/images/users/judge-chen.png"
  },
  {
    id: 11,
    text: "After importing dogs for years, we were thrilled to find this domestic breeding program. Our foundation bitch from their 2022 litter has produced two Best in Show winners. These bloodlines compete internationally.",
    name: "Catherine Dubois",
    role: "International Handler",
    event: "Winter's Tale Litter 2022",
    avatarUrl: "/images/users/judge-fontaine.png"
  },
  {
    id: 12,
    text: "As an agility competitor, I need dogs with both drive and off-switches. My two from previous litters have both reached Masters level. The breeder's early neurological stimulation program makes all the difference in confidence.",
    name: "Tyler O'Connor",
    role: "Agility Competitor",
    event: "Spring Fling Litter 2024",
    avatarUrl: "/images/users/judge-osullivan.png"
  }
];