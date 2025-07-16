// components/litters/ParentCard.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Title, Champion } from "@/constants/championsData";
import Image from "next/image";
import { MdFemale, MdMale, MdClose } from "react-icons/md";
import Link from "next/link";
import { useIsTouchDevice } from "@/lib/hooks/useIsTouchDevice";
import { cn } from "@/lib/utils";

interface ParentCardProps {
  image: string;
  name: string;
  role: "Sire" | "Dam";
  titles?: Title[];
  className?: string;
  slug?: string;
  championData?: Champion; // Add this prop to pass full champion data
}

export function ParentCard({
  image,
  name,
  role,
  titles,
  className = "",
  slug,
  championData,
}: ParentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isTouchDevice = useIsTouchDevice();
  const cardRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        isTouchDevice &&
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded, isTouchDevice]);

  return (
    <div
      ref={cardRef}
      className={`${className} w-full max-w-md lg:max-w-lg`}
      onMouseEnter={() => !isTouchDevice && setIsExpanded(true)}
      onMouseLeave={() => !isTouchDevice && setIsExpanded(false)}
      onClick={() => isTouchDevice && setIsExpanded(!isExpanded)}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${role} ${name} information card`}
      tabIndex={0}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <Image
          src={image}
          alt={`${role}: ${name}`}
          fill
          className="object-cover"
          priority
        />
        <div
          className={`absolute bg-gradient-to-t from-primary-accent/90 via-primary-accent/60 to-transparent bottom-0 left-0 right-0 transition-all duration-500 ease-in-out 
            ${isExpanded ? "h-full pt-4 pb-4 " : "h-32"} 
             p-6 overflow-y-auto`}
        >
          {/* Close button for mobile */}
          {isTouchDevice && isExpanded && (
            <button
              className="absolute z-50 top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              aria-label="Close card"
            >
              <MdClose className="text-white size-6" />
            </button>
          )}

          <div className="flex flex-col h-full">
            <div
              className={cn(isExpanded ? "text-primary-accent" : "text-white")}
            >
              <h3 className={cn("text-2xl font-bold  flex gap-2 items-center")}>
                {role}
                {role === "Sire" ? (
                  <MdMale className="text-blue-500 size-8" aria-hidden="true" />
                ) : (
                  <MdFemale
                    className="text-rose-500 size-8"
                    aria-hidden="true"
                  />
                )}
              </h3>
              <p className="text-xl font-semibold ">{name}</p>
              {titles?.[0] && (
                <p className="text-sm  mt-1">
                  {titles.at(-1)?.award} ({titles.at(-1)?.year})
                </p>
              )}
            </div>

            {isExpanded && (
              <div className="mt-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  {/* Championship Titles */}
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-white font-medium">
                      Championship Titles
                    </p>
                    <p className="text-white/90">
                      {titles?.length || 0} registered titles
                    </p>
                    {championData?.stats && (
                      <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                        <span className="text-white/80">
                          Shows Entered: {championData.stats.showsEntered}
                        </span>
                        <span className="text-white/80">
                          Ribbons: {championData.stats.ribbons}
                        </span>
                        <span className="text-white/80">
                          Best of Breed: {championData.stats.bestOfBreed}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Pedigree */}
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-white font-medium">Pedigree</p>
                    <p className="text-white/90">
                      {role === "Sire" ? "Father" : "Mother"} of{" "}
                      {name.split(" ")[0]}&apos;s lineage
                    </p>
                    {championData?.age && (
                      <p className="text-white/80 mt-1">
                        Age: {championData.age} years
                      </p>
                    )}
                  </div>

                

                
                </div>

                {/* Read More Link - positioned at bottom */}
               
                  <div className="mt-4 sticky bottom-0 pt-2 ">
                    <Link
                      href={`/dogs/${slug}`}
                      className="w-full inline-flex items-center justify-between px-4 py-3 bg-white text-primary-accent hover:bg-white/90 rounded-lg transition-all duration-300 group/link"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View full profile of ${name}`}
                    >
                      <span className="font-medium">View Full Profile</span>
                      <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
               
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
