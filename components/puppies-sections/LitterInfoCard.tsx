// components/litters/InfoCard.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function InfoCard({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 bg-white rounded-2xl shadow-md",
        className
      )}
    >
      <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-primary-accent relative w-fit">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-accent" />
      </h3>
      <div className="flex-1">{children}</div>
    </div>
  );
}
