"use client";
import React, { ReactElement } from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/moving-border";


export function MovingBorderBadge({
  text,
  icon,
  className,
  duration = 5000
}: {
  text: string;
  icon?: ReactElement;
  className?: string;
  duration?:number
}) {
  return (
    <Button
      as={"div"}
      duration={duration}
      borderRadius="1.75rem"
      className={cn("bg-primary-accent-light flex gap-2 items-center justify-center text-primary py-2 px-4 font-medium text-md  border-white ",className)}
    >
      {icon} {text}
    </Button>
  );
}
