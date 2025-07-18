"use client";

import { litters } from "@/constants/litters";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import LitterCard from "./LitterCard";
import { AnimatePresence, motion } from "motion/react";

export default function LittersFilterList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );

  const filteredData =
    selectedCategory === "all"
      ? litters
      : litters.filter((item) => item.status.includes(selectedCategory));

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push(`?category=${categoryId}`, { scroll: false });
  };
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-8 ">
        <button
           
            onClick={() => {
                setSelectedCategory("all")
             router.push(`?category=all`, { scroll: false });
            }}
            className={cn(
              `px-4 py-2 text-primary-accent rounded-md font-medium bg-primary-accent-light hover:text-white hover:bg-primary-accent duration-200 cursor-pointer transition-colors`,
              selectedCategory === "all" &&
                "bg-primary-accent text-white"
            )}
          >
            All
          </button>

        {litters.map((litter) => (
          <button
            key={litter.id}
            onClick={() => handleCategoryChange(litter.status)}
            className={cn(
              `px-4 py-2 text-primary-accent rounded-md font-medium bg-primary-accent-light hover:text-white hover:bg-primary-accent duration-200 cursor-pointer transition-colors capitalize`,
              selectedCategory === litter.status &&
                "bg-primary-accent text-white"
            )}
          >
            {litter.status}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 min-h-[440px] lg:grid-cols-3">
        <AnimatePresence>
          {filteredData.map((l) => (
            <motion.div
              key={l.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex size-full flex-1"
            >
              <LitterCard key={l.id} litter={l} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
