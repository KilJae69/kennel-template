
import { Puppy } from "@/constants/litters";
import { cn } from "@/lib/utils";
import { ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PuppyCard({
  puppy,
}: {
  puppy: Puppy;
  reverse?: boolean;
}) {
  return (
    <Link
      href={`/puppies/${puppy.slug}`}
      className={cn("w-full flex gap-6 group")}
    >
      <div className="relative flex flex-col  w-full">
        <div className="relative aspect-square">
          <Image src={puppy.image} alt="image" fill className="object-cover " />
          <div className="absolute flex items-center justify-center inset-0 bg-primary-accent/30 scale-0 group-hover:scale-100 transition duration-500">
            <Eye className="text-white size-16" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-4 md:gap-8 md:mt-8">
          <div className="flex flex-col items-center gap-2">
            <h4 className="!text-primary-accent font-semibold text-h2 relative">
              {puppy.name}
              <span className="absolute h-1 w-0 bg-primary-accent -bottom-1 left-0 transition-all duration-500 group-hover:w-full" />
            </h4>
            <p className="lg:text-lg font-semibold">{puppy.gender}</p>
          </div>
          <p className="text-paragraph text-center">{puppy.desc}</p>

          <span className="text-primary-accent text-xl flex items-center gap-2">
            Read More
            <ArrowRight className="size-5 transition-all duration-500 group-hover:translate-x-2" />
          </span>
        </div>
      </div>
    </Link>
  );
}
