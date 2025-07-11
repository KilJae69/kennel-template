/* eslint-disable @typescript-eslint/no-explicit-any */
// app/lib/hooks/useLazySwiper.ts

/* @import "swiper/css/navigation"; */
import { useState, useEffect } from "react";
import useLazyLoad from "./useLazyLoad";

/**
 * Lazy-load Swiper only when the container is in view.
 * Ensures that both the React components and the modules
 * (Pagination, Navigation, etc.) are imported together.
 */
export function useLazySwiper() {
  const { ref, isInView } = useLazyLoad();
  const [SwiperComponent, setSwiperComponent] = useState<any>(null);
  const [SwiperSlideComponent, setSwiperSlideComponent] = useState<any>(null);
  const [modules, setModules] = useState<any[]>([]);

  useEffect(() => {
    // Once the placeholder is in view, import Swiper + modules
    if (isInView && !SwiperComponent) {
      // Run both imports in parallel
      Promise.all([
        import("swiper/react"),
        import("swiper/modules"),
      ]).then(([reactModule, modulePackage]) => {
        // reactModule.Swiper and reactModule.SwiperSlide
        setSwiperComponent(() => reactModule.Swiper);
        setSwiperSlideComponent(() => reactModule.SwiperSlide);

        // modulePackage.Pagination, modulePackage.Navigation, etc.
        setModules([
          modulePackage.Pagination,
          modulePackage.Navigation,
        ]);
      });
    }
  }, [isInView, SwiperComponent]);

  return { ref, SwiperComponent, SwiperSlideComponent, modules };
}
