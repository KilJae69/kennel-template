import PuppiesForSaleSection from "@/components/about-sections/PuppiesForSaleSection";
import { Container } from "@/components/shared/Container";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";
import { champions } from "@/constants/championsData";
import { cn } from "@/lib/utils";
import { ArrowRight, Award, Heart, HeartPulse, Ruler, Smile, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DogsPage() {
  return (
    <>
      <PageIntro title="Our Champions" />
       {/* Introduction Section */}
      <section className="my-16 lg:my-28">
        <Container>
          <div className="max-w-4xl flex flex-col items-center mx-auto text-center">
             <SectionTitle 
              text="Celebrating" 
              accentText="Excellence" 
              
            />
            <p className="text-lg md:text-xl text-paragraph my-8">
              Meet the proud representatives of our breeding program - AKC champions 
              who exemplify the finest qualities of the breed. Each champion has 
              proven themselves in the show ring while contributing to our mission 
              of preserving and improving breed standards.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-primary-accent-light px-4 py-2 rounded-full">
                <Trophy className="text-primary-accent" />
                <span className="font-medium">AKC Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-accent-light px-4 py-2 rounded-full">
                <Heart className="text-primary-accent" />
                <span className="font-medium">Health Tested</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-accent-light px-4 py-2 rounded-full">
                <Award className="text-primary-accent" />
                <span className="font-medium">Show Winners</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Champions Grid */}
      <section className="my-16 lg:my-28">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8">
            {champions.map((champ) => (
              <Link
                key={champ.id}
                href={`/dogs/${champ.slug}`}
                className={cn(
                  "w-full flex flex-col group transition-all duration-300 hover:shadow-lg rounded-xl overflow-hidden"
                )}
              >
                <div className="relative flex flex-col w-full h-full">
                  {/* Image with overlay */}
                  <div className="relative aspect-square">
                    <Image
                      src={champ.image}
                      alt={`${champ.name} the champion ${champ.gender.toLowerCase()}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-primary-accent/0 group-hover:bg-primary-accent/30 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white text-center px-4">
                        <p className="font-bold text-lg mb-1">{champ.titles.length} Major Titles</p>
                        <p className="text-sm">Click to view achievements</p>
                      </div>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="bg-white p-6 flex-1 flex flex-col">
                    <div className="flex flex-col items-center gap-2 mb-4">
                      <h4 className="text-primary-accent font-semibold text-xl md:text-2xl relative group-hover:text-primary-accent-dark transition-colors">
                        {champ.name}
                      </h4>
                      <p className="text-sm uppercase tracking-wider text-gray-500">
                        {champ.gender} • {champ.age} years
                      </p>
                    </div>
                    
                    <p className="text-paragraph text-center mb-6 line-clamp-3">
                      {champ.desc}
                    </p>
                    
                    <div className="mt-auto flex justify-center">
                      <span className="text-primary-accent text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Full Profile
                        <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

     <section className="bg-gray-50 py-16 lg:py-28">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <SectionTitle 
                text="Our Breeding" 
                accentText="Commitment"
                
              />
              <p className=" text-paragraph mt-8 max-w-3xl mx-auto">
                Every puppy we produce stems from our unwavering dedication to these core principles:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Health First", 
                  desc: "All breeding dogs undergo OFA certifications, genetic testing, and regular health screenings to ensure the strongest foundation for our puppies.",
                  icon: <HeartPulse className="size-8 text-primary-accent animate-pulse" />,
                  bg: "bg-primary-accent/5"
                },
                { 
                  title: "Ideal Temperament", 
                  desc: "We prioritize stable, confident personalities that excel both in the show ring and as family companions.",
                  icon: <Smile className="size-8 text-primary-accent animate-pulse" />,
                  bg: "bg-primary-accent/10"
                },
                { 
                  title: "Breed Standard", 
                  desc: "Meticulous attention to AKC specifications for structure, movement, and type in every breeding decision.",
                  icon: <Ruler className="size-8 text-primary-accent animate-pulse" />,
                  bg: "bg-primary-accent/5"
                }
              ].map((item) => (
                <div 
                  key={item.title} 
                  className={`${item.bg} p-8 rounded-xl border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-300 group`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white size-16 flex items-center justify-center p-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-primary-accent mb-3">
                      {item.title}
                    </h4>
                    <p className="text-paragraph">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <PuppiesForSaleSection />
    </>
  );
}
