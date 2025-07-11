"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { PawPrint, Heart, Star, Activity } from "lucide-react";

const puppyBubbles = [
  {
    id: "gentle",
    icon: <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    label: "Gentle",
    position: "top-8 right-16 lg:right-24",
    delay: 0.2,
    color: "bg-pink-500/90",
  },
  {
    id: "playful",
    icon: <Activity className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    label: "Playful",
    position: "bottom-24 right-8 lg:right-16",
    delay: 0.4,
    color: "bg-blue-500/90",
  },
  {
    id: "smart",
    icon: <Star className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    label: "Smart",
    position: "top-1/2 right-4 lg:right-8 -translate-y-1/2",
    delay: 0.6,
    color: "bg-yellow-500/90",
  },
  {
    id: "loyal",
    icon: <PawPrint className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    label: "Loyal",
    position: "bottom-20 left-6 lg:left-12",
    delay: 0.8,
    color: "bg-amber-600/90",
  },
  {
    id: "alert",
    icon: <Star className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    label: "Alert",
    position: "top-20 left-24 lg:left-32",
    delay: 1.0,
    color: "bg-purple-500/90",
  },
  {
    id: "affectionate",
    icon: <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    label: "Affectionate",
    position: "top-1/3 left-8 lg:left-16",
    delay: 1.2,
    color: "bg-red-500/90",
  },
];

export default function PuppyBubbles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {puppyBubbles.map((bubble) => (
        <m.div
          key={bubble.id}
          className={cn(
            "absolute flex items-center gap-2 p-3 lg:p-4 rounded-full shadow-lg backdrop-blur-sm",
            bubble.color,
            bubble.position
          )}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        >
          {bubble.icon}
          <m.span 
            className="text-sm lg:text-base text-white font-medium whitespace-nowrap"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: bubble.delay + 0.5 }}
          >
            {bubble.label}
          </m.span>
        </m.div>
      ))}
    </div>
  );
}