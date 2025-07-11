"use client";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Container } from "./Container";

import SectionTitle from "./SectionTitle";
import judgeTestimonials from "@/constants/judgesTestimonialsData";
import { FaQuoteLeft } from "react-icons/fa6";
import { useLazySwiper } from "@/lib/hooks/useLazySwiper";

export default function TestimonialsSection() {
  const { ref, SwiperComponent, SwiperSlideComponent, modules } =
    useLazySwiper();
  return (
    <section
      ref={ref}
      className="relative grid grid-cols-1 sm:grid-cols-2 my-16  lg:my-28"
    >
      <div className="relative  overflow-hidden">
        {" "}
        <Image
          src="/images/about/history-2.jpg"
          alt="Group of corgi puppies"
          fill
          sizes="(min-width: 1140px) calc(48.33vw + 50px), (min-width: 920px) 50vw, (min-width: 640px) 499px, 100vw"
          className="object-cover "
        />
        {/* <div className="absolute inset-0 bg-black/30" /> */}
        {/* hotspots (on top of image) */}
      </div>
      <div className="bg-gradient-accent  overflow-hidden">
        <Container className="relative">
          <div className="max-w-2xl lg:pl-24 py-12 lg:py-24 text-white">
            <SectionTitle
              text="Judge's"
              accentText={`Comments`}
              color="#fff"
              accentColor="#fff"
            />

            {/* Swiper Container */}

            {SwiperComponent && SwiperSlideComponent ? (
              <SwiperComponent
                modules={modules}
                pagination={{
                  clickable: true,
                }}
                className="testimonial-swiper mt-6"
              >
                {/* Slide 1 */}
                {judgeTestimonials.map((testimonial) => (
                  <SwiperSlideComponent key={testimonial.id}>
                    <div className=" text-black pb-3">
                      <p className="mb-14 text-paragraph italic !text-white">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="relative border rounded-full border-white bg-white">
                          <Image
                            src={testimonial.avatarUrl}
                            alt="avatar"
                            width={75}
                            height={75}
                            className="rounded-full "
                          />
                          <span className="absolute -bottom-3 left-1/2 z-20 size-6 bg-white rounded-full flex items-center justify-center">
                            <FaQuoteLeft className="text-primary-accent size-3" />
                          </span>
                        </div>
                        <div className="text-white">
                          <p className="font-bold text-xl">
                            {testimonial.name}
                          </p>
                          <p className=" text-accent">{testimonial.role}</p>
                          <p className=" text-accent">{testimonial.event}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlideComponent>
                ))}
              </SwiperComponent>
            ) : null}
          </div>
        </Container>
      </div>
    </section>
  );
}
