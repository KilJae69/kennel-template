import { TimelineEvent } from "@/components/ui/animated-timeline";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const wait = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export function mapTitlesToTimelineEvents(titles: {
  year: number;
  event: string;
  award: string;
}[]): TimelineEvent[] {
  return titles.map((title) => ({
    id: `${title.year}-${title.event}`,
    title: `${title.event}`,
    description: title.award,
    date: title.year.toString(),
    originalData: title, // preserve original data in case you need it
  }));
}