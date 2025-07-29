import Image from "next/image";
import { Container } from "./shared/Container";
import SpotlightCard from "./ui/spotlight-card";
import SubscribeInput from "./shared/SubscribeInput";

import Link from "next/link";
import { footerConfig } from "@/constants/footerConfig";

export default function Footer() {
  return (
    <footer className="mt-auto relative ">
      <div className="pt-12 lg:pt-24 pb-10 bg-primary">
        <Container>
          <div className="flex flex-col md:flex-row gap-8  text-white">
            <div className="md:max-w-1/2">
              <div className="relative w-[140px] h-[80px] md:w-[200px] mb-4">
                <Image
                  src="/logo.svg"
                  className="object-contain"
                  fill
                  alt="logo"
                />
              </div>
              <p className="text-paragraph">
                At Welsh Corgi Breeding &amp; Sale, we raise each litter with
                champion bloodlines, rigorous health testing, and lots of
                love—so you can welcome a healthy, well-socialized puppy into
                your family.
              </p>

              <div className="text-white mt-4 md:mt-8">
                <SpotlightCard
                  className="bg-transparent"
                  spotlightColor={"rgba(226, 106, 44, 0.4)"}
                >
                  <div className="">
                    <div className="flex flex-col  sm:flex-row md:flex-col lg:flex-row gap-4 md:gap-8 mb-4 md:mb-8">
                      <h3 className="font-semibold min-w-[200px] text-gradient-accent text-2xl">
                        Never Miss a Litter?
                      </h3>
                      <p >
                        Subscribe with your email to get exclusive whelping room
                        photos, puppy availability alerts, and expert care
                        tips—straight from our kennel to your inbox.
                      </p>
                    </div>
                    <SubscribeInput />
                  </div>
                </SpotlightCard>
              </div>
            </div>

            <div className="grid content-start grid-cols-1 sm:grid-cols-2  gap-8 ">
              {/* Main Navigation */}
              <div>
                <h3 className="font-semibold mb-4 text-primary-accent">
                  Main Navigation
                </h3>
                <ul className="space-y-4">
                  {footerConfig.mainNavigation.map(({ href, title }) => (
                    <li className="relative w-fit group" key={href}>
                      <Link
                        href={href}
                        className="group-hover:text-primary-accent whitespace-nowrap"
                      >
                        {title}
                      </Link>
                      <span className="absolute w-0 h-[2px] bg-primary-accent bottom-0 left-0 group-hover:w-full transition-all duration-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subsidiary Links */}
              <div>
                <h3 className="font-semibold text-primary-accent mb-4">
                  Resources
                </h3>
                <ul className="space-y-4">
                  {footerConfig.subsidiaryLinks.map(({ href, title }) => (
                    <li className="relative w-fit group" key={href}>
                      <Link
                        href={href}
                        className="group-hover:text-primary-accent whitespace-nowrap"
                      >
                        {title}
                      </Link>
                      <span className="absolute w-0 h-[2px] bg-primary-accent bottom-0 left-0 group-hover:w-full transition-all duration-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help & Support */}
              <div>
                <h3 className="font-semibold text-primary-accent mb-4">
                  Help & Support
                </h3>
                <ul className="space-y-4">
                  {footerConfig.helpSupport.contacts.map(
                    ({ icon: Icon, valueKey }) => (
                      <li key={valueKey} className="flex items-start gap-2">
                        <Icon className="size-5 shrink-0 text-primary-accent mt-1" />
                        <span className="text-sm">{valueKey}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* Help & Support */}
              <div>
                <h3 className="font-semibold text-primary-accent mb-4">
                  Connect With Us
                </h3>
                <ul className="space-y-4">
                  {footerConfig.connect.map(({ icon: Icon, label, href }) => (
                    <li key={href} className="relative group w-fit">
                      <a
                        href={href}
                        className="flex items-start gap-2"
                        target="__blank"
                        rel="noreferrer noopener"
                      >
                        <Icon className="size-5 shrink-0  group-hover:text-primary-accent text-white " />
                        <span className="text-sm relative group-hover:text-primary-accent">
                          {label}

                          <span className="absolute w-0 h-[2px] bg-primary-accent bottom-0 left-0 group-hover:w-full transition-all duration-300" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-6 bg-gray-100">
        <Container>
          <p className="text-xs w-full text-center">
            © 2025. All rights reserved. Template developed by{" "}
            <a
              className="hover:underline"
              target="__blank"
              rel="noreferrer noopener"
              href="https://www.spark-dev-studio.com/en/"
            >
              <span className="text-[#d4af37]">Spark</span>Studio
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
