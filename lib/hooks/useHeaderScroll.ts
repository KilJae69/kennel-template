// hooks/useHeaderScroll.ts
"use client"
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export type HeaderState = "top" | "hidden" | "small";

export function useHeaderScroll() {
  const [headerState, setHeaderState] = useState<HeaderState>("top");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest === 0) {
      setHeaderState("top");
    } else if (latest > previous && latest > 50) {
      setHeaderState("hidden");
    } else if (latest < previous) {
      setHeaderState("small");
    }
  });

  // Calculate exact positions based on your header measurements
  const getTopPositions = () => {
    // Desktop measurements:
    // - Top state: 28px (top bar) + 121px (main header) = 149px total
    // - Hidden state: 101px (main header only, top bar hidden)
    // - Small state: same as top state (149px) when scrolling up
    return {
      desktop: {
        topBarHeight: 32,
        mainHeaderHeight: headerState === "hidden" ? 101 : 121,
        totalHeight: headerState === "hidden" ? 101 : 149,
      },
      mobile: {
        // Your mobile measurements here
        totalHeight: headerState === "hidden" ? 80 : 151,
      },
    };
  };

  return {
    headerState,
    positions: getTopPositions(),
  };
}