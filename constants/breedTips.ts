// constants/breedTips.ts
import {
  Scissors,
  Home,
  Bone,
  Pill,
  Heart,
  Dumbbell,
} from "lucide-react";

export type BreedTip = {
  id: string;
  slug: string;
  href: string;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heroImage: string;
  intro: string;
  sections: {
    heading: string;
    headingAccent: string;
    text: string;
    image: string;
  }[];
};

export const breedTips: BreedTip[] = [
  {
    id: "care",
    slug: "care",
    href: "/breed/care",
    title: "Care",
    Icon: Scissors,
    heroImage: "/images/breed/care-hero.jpg",
    intro:
      "Keeping your corgi’s coat in tip-top shape is more than just vanity—it’s a key part of their health and comfort.  A little daily brushing, the right shampoo, and routine trims go a long way.",
    sections: [
      {
        heading: "Daily",
        headingAccent:"Brushing",
        text: "Use a slicker brush or rubber curry mitt at least 2-3× per week to remove loose undercoat and prevent mats.  Pay special attention behind the ears and under the chest where tangles hide.",
        image: "/images/about/history-1.jpg",
      },
      {
        heading: "Bath Time",
        headingAccent:"Basics",
        text: "Bathe only once every 4–6 weeks with a gentle, dog-formulated shampoo.  Always rinse thoroughly and towel-dry before letting your corgi run free—wet fur can trap dirt and odor.",
        image: "/images/about/history-2.jpg",
      },
      {
        heading: "Professional",
        headingAccent: "Trimming",
        text: "Every 3–4 months, schedule a groomer for a sanitary trim and paw-pad tidy-up.  Keeping hair short around the paws reduces slipping and keeps dirt at bay.",
        image: "/images/about/history-3.jpg",
      },
    ],
  },

  {
    id: "keeping",
    slug: "keeping",
    href: "/breed/keeping",
    title: "Keeping",
    Icon: Home,
    heroImage: "/images/breed/keeping-hero.jpg",
    intro:
      "A happy corgi at home is a safe corgi.  From crate training to puppy-proof playrooms, this section covers how to build the perfect environment for your short-legged companion.",
    sections: [
      {
        heading: "Crate &",
        headingAccent: "Den Setup",
        text: "Introduce the crate as a cozy retreat—line it with a soft bed and a few toys.  Crates are invaluable for house-training and for giving your corgi a safe space of their own.",
        image: "/images/about/history-1.jpg",
      },
      {
        heading: "Play",
        headingAccent: "Zones",
        text: "Block off a corner of the living room or yard with gates to create a puppy-proof play area.  Make sure it’s free of wires, houseplants, or small objects they can swallow.",
        image: "/images/about/history-2.jpg",
      },
      {
        heading: "Routine &",
        headingAccent: "Consistency",
        text: "Corgis thrive on routine.  Aim for consistent feeding, potty, and nap times—this predictability reduces stress and fast-tracks training.",
       image: "/images/about/history-3.jpg",
      },
    ],
  },

  {
    id: "food",
    slug: "food",
    href: "/breed/food",
    title: "Food",
    Icon: Bone,
    heroImage: "/images/breed/food-hero.jpg",
    intro:
      "Fuel your corgi’s boundless energy with high-quality, breed-appropriate nutrition.  Whether you choose kibble, raw, or home-cooked, balance and portion control are key.",
    sections: [
      {
        heading: "Choosing",
        headingAccent: "Kibble",
        text: "Look for a named animal protein (e.g. “chicken meal”) as the first ingredient, limited fillers, and added omega fatty acids to support skin & coat health.",
        image: "/images/about/history-1.jpg",
      },
      {
        heading: "Feeding",
        headingAccent: "Schedule",
        text: "Adult corgis do well on two meals per day.  Measure carefully—this breed has a tendency to gain weight if left on free-feed.",
       image: "/images/about/history-2.jpg",
      },
      {
        heading: "Hydration",
        headingAccent: "Matters",
        text: "Always keep fresh water available.  Consider a pet fountain to encourage sips—proper hydration aids digestion and joint lubrication.",
        image: "/images/about/history-3.jpg",
      },
    ],
  },

  {
    id: "vitamins",
    slug: "vitamins",
    href: "/breed/vitamins",
    title: "Vitamins",
    Icon: Pill,
    heroImage: "/images/breed/vitamins-hero.jpg",
    intro:
      "Supplementing smartly can fill any nutritional gaps—especially for joint support and skin-coat health.  Always consult your vet before adding anything new.",
    sections: [
      {
        heading: "Joint",
        headingAccent: "Supplements",
        text: "Glucosamine & chondroitin can help protect corgi’s busy hips.  Look for reputable brands and follow dosage guidelines based on weight.",
        image: "/images/about/history-1.jpg",
      },
      {
        heading: "Skin &",
        headingAccent: "Coat",
        text: "Omega-3 fish oil or flaxseed oil supports a glossy coat and soothes dry skin.  Mix into meals or choose kibble with added fatty acids.",
       image: "/images/about/history-2.jpg",
      },
      {
        heading: "Daily",
        headingAccent: "Multivitamin",
        text: "A broad-spectrum multivitamin can help cover any dietary shortfalls—but choose one formulated for small breeds to avoid overdosing.",
        image: "/images/about/history-3.jpg",
      },
    ],
  },

  {
    id: "health",
    slug: "health",
    href: "/breed/health",
    title: "Health",
    Icon: Heart,
    heroImage: "/images/breed/health-hero.jpg",
    intro:
      "Proactive care keeps your corgi sprinting into old age.  From vaccinations to dental cleanings, here’s how to stay one step ahead of common canine ailments.",
    sections: [
      {
        heading: "Vet",
        headingAccent: "Checkups",
        text: "Annual exams catch issues early—heart murmurs, hip dysplasia, or dental disease—and keep vaccine schedules up to date.",
        image: "/images/about/history-1.jpg",
      },
      {
        heading: "Dental",
        headingAccent: "Care",
        text: "Brush 2–3× per week with dog toothpaste.  Dental chews and water additives can help reduce tartar build-up between brushings.",
       image: "/images/about/history-2.jpg",
      },
      {
        heading: "Parasite",
        headingAccent: "Prevention",
        text: "Year-round flea/tick and monthly heartworm preventives will protect your corgi from vectors that carry serious diseases.",
        image: "/images/about/history-3.jpg",
      },
    ],
  },

  {
    id: "exercise",
    slug: "exercise",
    href: "/breed/exercise",
    title: "Exercise",
    Icon: Dumbbell,
    heroImage: "/images/breed/exercise-hero.jpg",
    intro:
      "Short legs don’t slow these herders—regular activity keeps them happy, healthy, and out of trouble.  Mix physical play with mental challenges for a balanced routine.",
    sections: [
      {
        heading: "Daily",
        headingAccent: "Walks",
        text: "30–45 minutes per day in a safe, fenced area or on-leash.  Corgis love sniff breaks—let them explore for mental enrichment.",
        image: "/images/about/history-1.jpg",
      },
      {
        heading: "Agility &",
        headingAccent: "Games",
        text: "Set up low jumps or weave poles in the backyard.  Teething puppies especially love chase and fetch for coordination practice.",
        image: "/images/about/history-2.jpg",
      },
      {
        heading: "Brain",
        headingAccent: "Teasers",
        text: "Puzzle feeders and hide-and-seek with treats slow down fast eaters and keep their clever minds busy.",
        image: "/images/about/history-3.jpg",
      },
    ],
  },
];
