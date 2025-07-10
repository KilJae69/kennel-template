import { BreedTip } from "@/constants/breedTips";
import { cn } from "@/lib/utils";
import { ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BreedTipCard({
  tip,
  reverse = false,
}: {
  tip: BreedTip;
  reverse?: boolean;
}) {
  return (
    <Link
      href={tip.href}
      className={cn(
        "w-full flex gap-6 group",
        reverse && "md:flex-row-reverse"
      )}
    >
      <div className="h-full flex flex-col  items-center ">
        <div className="flex items-center justify-center  rounded-full bg-white transition duration-500 group-hover:bg-black p-4">
          <tip.Icon className="text-primary-accent transition duration-500 group-hover:text-white size-8 md:size-12 lg:size-16" />
        </div>
        <div className="w-px h-full bg-gray-300" />
      </div>
      <div className="relative flex flex-col  w-full">
        <div className="relative aspect-video">
          <Image src={tip.heroImage} alt="image" fill className="object-cover " />
          <div className="absolute flex items-center justify-center inset-0 bg-primary-accent/30 scale-0 group-hover:scale-100 transition duration-500">
            <Eye className="text-white size-16" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-4 md:gap-8 md:mt-8">
          <h4 className="!text-primary-accent font-semibold text-h2 relative">
            {tip.title}
            <span className="absolute h-1 w-0 bg-primary-accent -bottom-1 left-0 transition-all duration-500 group-hover:w-full" />
          </h4>
          <p className="text-paragraph text-center">{tip.intro}</p>

          <span className="text-primary-accent text-xl flex items-center gap-2">
            Read More
            <ArrowRight className="size-5 transition-all duration-500 group-hover:translate-x-2" />
          </span>
        </div>
      </div>
    </Link>
  );
}
