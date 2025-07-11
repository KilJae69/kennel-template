"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GalleryItem } from "@/constants/galleryData";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { galleryCategories } from "@/constants/galleryData";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";

export default function Gallery({
  galleryData,
}: {
  galleryData: GalleryItem[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );

  const filteredData =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) =>
          item.categories.includes(selectedCategory)
        );

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push(`?category=${categoryId}`, { scroll: false });
  };

  return (
    <div className="my-16 lg:my-28">
      <div className="w-fit mx-auto mb-8 ">
        <SectionTitle text="Champion" accentText="Moments" />
      </div>
      <p className="max-w-3xl mb-8 mx-auto text-center text-paragraph">
        {" "}
        Relive the highlights of our champions show careers through these
        captured moments. Each image tells a story of excellence - from the
        poised stack in the ring to the triumphant wins that define our breeding
        program. Browse through their journey to becoming some of the most
        celebrated examples of the breed.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 lg:mb-16">
        {galleryCategories.map((category) => (
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

      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        <AnimatePresence>
          {filteredData.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 break-inside-avoid"
            >
              <motion.div
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentIndex(
                    filteredData.findIndex((img) => img.id === item.id)
                  );
                  setOpen(true);
                }}
                className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 6}
                  className="w-full h-auto object-cover rounded-lg"
                  placeholder="blur"
                  blurDataURL={"data:image/svg+xml;base64,..."}
                />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No images in this category
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={filteredData.map((item) => ({
          src: item.url,
          alt: item.title,
          title: item.title,
          description: item.description,
        }))}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}
