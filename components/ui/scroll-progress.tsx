"use client";

import { cn } from "@/lib/utils";
import { m, MotionProps, useScroll } from "motion/react";
import React from "react";
type ScrollProgressProps = Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <m.div
      ref={ref}
      
      className={cn(
        "fixed inset-x-0 -bottom-[1px] z-50 h-px origin-left bg-primary-accent",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
