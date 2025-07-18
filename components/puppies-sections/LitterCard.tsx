import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Heart, Users } from "lucide-react";
import { Litter } from "@/constants/litters";

interface LitterCardProps {
  litter: Litter;
}

export default function LitterCard({ litter }: LitterCardProps) {
  const statusMap = {
    upcoming: { text: "Expected Soon", color: "blue" },
    available: { text: "Available", color: "green" },
    "sold-out": { text: "Sold Out", color: "gray" },
    reserved: { text: "Reserved", color: "yellow" },
  } as const;

  const { text: statusText, color: statusColor } = statusMap[litter.status];

  console.log(litter);

  return (
    <Card className="overflow-hidden group size-full hover:shadow-lg border-none transition-shadow py-0">
      <Link
        href={`/litters/${litter.slug}`}
        className="h-full flex flex-col  items-stretch"
        title={litter.title}
      >
        {/* Hero Image */}
        <div className="flex relative bg-primary-accent">
          <div className="relative h-48 w-full">
            <Image
              src={litter.sire.image}
              alt={litter.sire.name}
              fill
              className="object-cover group-hover:scale-95 group-hover:rounded-xl transition-all duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <div className="relative h-48 w-full">
            <Image
              src={litter.dam.image}
              alt={litter.dam.name}
              fill
              className="object-cover group-hover:scale-95 group-hover:rounded-xl transition-all duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl group-hover:animate-none -translate-x-1/2 animate-pulse -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg border-4 border-white">
            <Heart className="size-6 lg:size-9 text-rose-500 fill-rose-500/30" />
          </div>
        </div>

        <CardContent className="space-y-4 p-4 ">
          <div className="flex justify-between gap-2 items-start">
            <h3 className="text-xl font-semibold text-primary-accent ">
              {litter.title}
            </h3>
            <Badge className={`bg-${statusColor}-100 text-${statusColor}-800`}>
              {statusText}
            </Badge>
          </div>

          <p className="text-sm text-gray-500">{litter.breed}</p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span>
                {litter.birthDate ? "Born" : "Due"}:{" "}
                <span className="font-medium">
                  {litter.birthDate ?? litter.expectedDate}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-orange-500" />
              <span>
                {litter.puppyCount} total
                {litter.availablePuppies != null &&
                  litter.status === "available" && (
                    <> · {litter.availablePuppies} available</>
                  )}
              </span>
            </div>
            {litter.price && (
              <div className="flex items-center gap-1">
                <span className="font-medium">Price:</span>{" "}
                <span className="text-green-600">{litter.price}</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex justify-center bg-primary-accent">
         
            <span className="text-white text-sm font-medium py-3 flex items-center gap-2 group-hover:gap-3 transition-all">
              View Details
              <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
            </span>
         
        </CardFooter>
      </Link>
    </Card>
  );
}
