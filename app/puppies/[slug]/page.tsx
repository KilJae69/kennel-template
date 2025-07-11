import PuppyBubbles from "@/components/PuppyBubbles";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import { puppies } from "@/constants/puppiesData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Quote } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import ContactForm from "@/components/shared/ContactForm";

export function generateStaticParams() {
  return puppies.map((b) => ({ slug: b.slug }));
}

export default async function SinglePuppyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const puppy = puppies.find((b) => b.slug === slug);
  if (!puppy) return notFound();
  return (
    <>
      <PageIntro title={puppy.name} />
      <section className="my-16">
        <Container>
          <FadeIn>
            <div className="relative w-full aspect-square max-w-4xl mx-auto overflow-hidden mb-8">
              <Image
                src={puppy.image}
                alt={`${puppy.name} hero`}
                fill
                className="object-cover"
                priority
              />
              <PuppyBubbles />
            </div>
            <div className="space-y-12 max-w-4xl mx-auto">
              <p className=" text-paragraph mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aut dignissimos nesciunt alias consectetur laboriosam tempora
                tenetur aperiam quam molestiae mollitia sapiente aliquam culpa
                deserunt, quasi ullam temporibus autem. Eaque! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Aut amet culpa dolorem
                suscipit placeat sequi quo recusandae incidunt sed odit ullam
                esse, ratione necessitatibus aperiam eaque. Debitis officiis
                voluptas ad?Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {" "}
                {/* Added gap for spacing */}
                <div className="relative aspect-square overflow-hidden">
                  {" "}
                  {/* Container for each image */}
                  <Image
                    src="/images/breed/corgi-wash.jpg"
                    alt="corgi 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/breed/exercise-hero.jpg"
                    alt="corgi 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/breed/keeping-hero.jpg"
                    alt="corgi 3"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              </div>
              <p className=" text-paragraph mx-auto">
                Debitis officiis voluptas ad?Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Dignissimos possimus vitae
                temporibus autem reprehenderit, et consectetur praesentium ea
                rerum fuga non modi natus facilis. Expedita eligendi assumenda
                possimus culpa voluptatum?
              </p>

              <div className="bg-primary-accent flex-col-reverse sm:flex-row flex py-12 px-6">
                <div className="flex-1">
                  <p className=" text-paragraph  !text-white  mx-auto">
                    Debitis officiis voluptas ad?Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Dignissimos possimus vitae
                    temporibus autem reprehenderit, et consectetur praesentium
                    ea rerum fuga non modi natus facilis. Expedita eligendi
                    assumenda possimus culpa voluptatum?
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="border size-12 rounded-full flex items-center overflow-hidden bg-white border-primary-accent-dark justify-center">
                      <Image
                        src="/images/users/elena-owens.webp"
                        alt="caretaker"
                        width={50}
                        height={50}
                      />
                    </div>
                    <p className="text-xl font-semibold text-white">
                      Elena Owens, Caretaker
                    </p>
                  </div>
                </div>
                <Quote className="text-white size-12" />
              </div>
              <p className=" text-paragraph mx-auto">
                Debitis officiis voluptas ad?Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Dignissimos possimus vitae
                temporibus autem reprehenderit, et consectetur praesentium ea
                rerum fuga non modi natus facilis. Expedita eligendi assumenda
                possimus culpa voluptatum?
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
      <section className="my-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-18">
            <SectionTitle
              text="Interested in our"
              accentText={`${puppy.name} ?`}
            />

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
