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

export function shuffleArray<T>(array: readonly T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
