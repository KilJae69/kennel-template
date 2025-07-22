"use client";

import React from "react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
// import Image from "next/image";

import { useLazySwiper } from "@/lib/hooks/useLazySwiper";

import BlogCard from "./BlogCard";
import { Blog } from "@/constants/blogsData";

export default function BlogsSwiper({ blogs }: { blogs: Blog[] }) {
  const { ref, SwiperComponent, SwiperSlideComponent, modules } =
    useLazySwiper();
  
  

  return (
    <div ref={ref} className="flex items-center justify-center w-full">
      {SwiperComponent ? (
        <SwiperComponent
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          grabCursor={true}
          modules={modules}
          className=" size-full h-[450px] "
        >
          {blogs.map((item) => (
            <SwiperSlideComponent
              key={item.title}
              className="relative p-2  cursor-grab"
            >
              <BlogCard blog={item} className="h-[400px] hover:shadow-lg " />
            </SwiperSlideComponent>
          ))}
        </SwiperComponent>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

// 2) One single skeleton placeholder
function Skeleton() {
  return (
    <div className="w-full h-[420px] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="group relative block overflow-hidden h-[400px] bg-white rounded-lg shadow animate-pulse"
          >
            <div className="bg-gray-200 h-48 w-full rounded-t-lg" />
            <div className="p-4 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
