// components/litters/GallerySection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";          // ← don’t forget the CSS

import type { GalleryImage } from "@/constants/litters";
import { Container } from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

export function GallerySection({ images }: { images: GalleryImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <section className="my-16 lg:my-28">
      <Container>
        <SectionTitle text="Litter" accentText="Gallery" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {images.map((image, idx) => (
            <div
              key={image.id}
              className="relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow aspect-video"
              onClick={() => {
                setCurrentIndex(idx);
                setOpen(true);
              }}
            >
              <Image
                src={image.src}                         // ← use `.src`
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((img) => ({
            src: img.src,                            // ← use `.src`
            alt: img.alt,
            title: img.caption,
            description: img.caption,                // or `img.description` if you have it
          }))}
          controller={{ closeOnBackdropClick: true }}
        />
      </Container>
    </section>
  );
}
