"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { champions, championsCategories } from "@/constants/championsData";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function DogsFilterList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );

  const filteredData =
    selectedCategory === "all"
      ? champions
      : champions.filter((item) => item.gender.includes(selectedCategory));

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push(`?category=${categoryId}`, { scroll: false });
  };
  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 ">
        {championsCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={cn(
              `px-4 py-2 text-primary-accent rounded-md font-medium bg-primary-accent-light hover:text-white hover:bg-primary-accent duration-200 cursor-pointer transition-colors`,
              selectedCategory === category.id && "bg-primary-accent text-white"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        <AnimatePresence>
          {filteredData.map((champ) => (
            <motion.div
              key={champ.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 break-inside-avoid"
            >
              <Link
                href={`/dogs/${champ.slug}`}
                className={cn(
                  "w-full flex flex-col group transition-all duration-300 hover:shadow-lg rounded-xl overflow-hidden"
                )}
              >
                <div className="relative flex flex-col w-full h-full">
                  {/* Image with overlay */}
                  <div className="relative aspect-square">
                    <Image
                      src={champ.image}
                      alt={`${
                        champ.name
                      } the champion ${champ.gender.toLowerCase()}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-primary-accent/0 group-hover:bg-primary-accent/30 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white text-center px-4">
                        <p className="font-bold text-lg mb-1">
                          {champ.titles.length} Major Titles
                        </p>
                        <p className="text-sm">Click to view achievements</p>
                      </div>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="bg-white p-6 flex-1 flex flex-col">
                    <div className="flex flex-col items-center gap-2 mb-4">
                      <h4 className="text-primary-accent font-semibold text-xl md:text-2xl relative group-hover:text-primary-accent-dark transition-colors">
                        {champ.name}
                      </h4>
                      <p className="text-sm uppercase tracking-wider text-gray-500">
                        {champ.gender} • {champ.age} years
                      </p>
                    </div>

                    <p className="text-paragraph text-center mb-6 line-clamp-3">
                      {champ.desc}
                    </p>

                    <div className="mt-auto flex justify-center">
                      <span className="text-primary-accent text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Full Profile
                        <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
