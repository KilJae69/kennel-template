import HistoryFamilySection from "@/components/about-sections/HistoryFamilySection";
import BreedTipCard from "@/components/breed-section/BreedTipCard";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";
import { breedTips } from "@/constants/breedTips";
import { corgiBreedTimeline } from "@/constants/corgiBreedTimeline";

import Image from "next/image";


export default function BreedPage() {
  return (
    <>
      <PageIntro title="About Corgies" />
      <HistoryFamilySection
        timeline={corgiBreedTimeline}
        text="History"
        accentText="& Family"
      />
      <section className="relative grid grid-cols-1 sm:grid-cols-2 my-16  lg:my-28">
        <div className="relative  overflow-hidden">
          {" "}
          <Image
            src="/images/about/history-2.jpg"
            alt="Group of corgi puppies"
            fill
            sizes="(min-width: 1140px) calc(48.33vw + 50px), (min-width: 920px) 50vw, (min-width: 640px) 499px, 100vw"
            className="object-cover "
          />
          {/* <div className="absolute inset-0 bg-black/30" /> */}
          {/* hotspots (on top of image) */}
        </div>
        <div className="bg-primary-accent  overflow-hidden">
          <Container className="relative">
            <div className="flex flex-col lg:flex-row">
              {/* text (on top of color) */}
              <FadeIn className="py-16 lg:py-28 lg:pr-22 xl:pr-0 flex-shrink-0 flex text-center mx-auto items-center flex-col gap-8 justify-center max-w-xl text-white">
                <SectionTitle
                  text="Fun Facts"
                  accentText="About Corgi"
                  accentColor="#fff"
                />
                <ul className="text-left text-paragraph space-y-4 !text-white/90">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Royal Roots:</strong> Queen Elizabeth II owned
                      over 30 corgis during her reign, starting with a pup named
                      Susan in 1944
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Big Dog in a Small Package:</strong> Despite their
                      short legs, corgis were bred to herd cattle and can run up
                      to 25 mph
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Expressive Ears:</strong> Their ears don&apos;t
                      fully stand up until they&apos;re about 2-3 months old -
                      it&apos;s like watching satellite dishes deploy!
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Double Coated:</strong> That fluffy fur isn&apos;t
                      just cute - it&apos;s waterproof and insulated for
                      all-weather herding
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Fox Lookalikes:</strong> Their fox-like appearance
                      isn&apos;t coincidence - Welsh legend says corgis were the
                      steeds of fairy warriors
                    </span>
                  </li>
                </ul>
              </FadeIn>
            </div>
          </Container>
        </div>
      </section>

      <section className="my-16  lg:my-28">
        <Container>
          <SectionTitle text="Food. Love." accentText="Trainings" />

          <div className="grid mt-16 lg:mt-28 grid-cols-1 gap-6 md:gap-12 md:grid-cols-2">
            {breedTips.map((tip,index)=> (
                <BreedTipCard key={tip.id} tip={tip}  reverse={index % 2 === 1} />
            ))}
           
          </div>
        </Container>
      </section>
    </>
  );
}
