import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";

import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/shared/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="  py-12   mt-32">
        <Container>
          <FadeIn>
            <div className="flex items-center justify-center w-full">
              <h1 className="text-h1 relative w-fit  pb-6">
                Contact{" "}
                <span className="text-primary-accent font-extrabold">Us</span>
                <span className="w-full bottom-0 left-0 absolute h-px bg-gray-300" />
              </h1>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="relative grid grid-cols-1 sm:grid-cols-2 my-16  ">
        <a
          target="__blank"
          rel="noreferrer noopener"
          href="https://maps.app.goo.gl/8P7zLoZFMnpvzjhV8"
          className="relative  overflow-hidden"
        >
          {" "}
          <Image
            src="/images/contact/map.png"
            alt="Group of corgi puppies"
            fill
            sizes="(min-width: 1140px) calc(48.33vw + 50px), (min-width: 920px) 50vw, (min-width: 640px) 499px, 100vw"
            className="object-cover "
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* hotspots (on top of image) */}
        </a>
        <div className="bg-primary-accent  overflow-hidden">
          <Container className="relative">
            <div className="flex flex-col lg:flex-row">
              {/* text (on top of color) */}
              <FadeIn className="py-16 lg:py-28 lg:pr-22 xl:pr-0 flex-shrink-0 flex text-center mx-auto items-center flex-col gap-8 justify-center max-w-xl text-white">
                <SectionTitle
                  text="Contact Us"
                  accentText="Directly"
                  accentColor="#fff"
                />
                {/* contact items */}
                <div className="space-y-8">
                  {/* Email */}
                  <a
                    href="mailto:info@corgi.com"
                    className="flex flex-col md:flex-row items-center gap-4 group "
                  >
                    <Mail className="size-12 text-white transition-transform duration-300 group-hover:animate-pulse" />
                    <div className="transform transition-transform duration-200 group-hover:scale-95">
                      <div className="font-semibold text-xl lg:text-3xl">
                        info@corgi.com
                      </div>
                      <div className="text-md text-white/80 lg:text-xl">
                        Send us an email
                      </div>
                    </div>
                  </a>

                  <div className="border-t border-white/40" />

                  {/* Address */}
                  <Link
                    href="https://maps.app.goo.gl/8P7zLoZFMnpvzjhV8"
                    target="__blank"
                    rel="noreferrer"
                    className="flex flex-col md:flex-row items-center gap-4 group "
                  >
                    <MapPin className="size-12 text-white transition-transform duration-300 group-hover:animate-pulse" />
                    <div className="transform transition-transform duration-200 group-hover:scale-95">
                      <div className="font-semibold text-xl lg:text-3xl">
                        8500 Big Street
                      </div>
                      <div className="text-md lg:text-xl text-white/80">
                        Chicago, IL, 55030
                      </div>
                    </div>
                  </Link>

                  <div className="border-t border-white/40" />

                  {/* Phone */}
                  <a
                    href="tel:+18001234567"
                    className="flex flex-col md:flex-row items-center gap-4 group "
                  >
                    <Phone className="size-12 text-white transition-transform duration-300 group-hover:animate-pulse" />
                    <div className="transform transition-transform duration-200 group-hover:scale-95">
                      <div className="font-semibold text-xl lg:text-3xl">
                        1 (800) 123-4567
                      </div>
                      <div className="text-lg lg:text-xl text-white/80">
                        Mon–Fri · 10am – 6pm
                      </div>
                    </div>
                  </a>
                </div>
              </FadeIn>
            </div>
          </Container>
        </div>
      </section>
      <section className="my-16 lg:my-28">
        <Container>
          <div className="mx-auto w-fit">
            <SectionTitle text="Send Us" accentText="a Message" />
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
