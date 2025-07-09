// app/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "motion/react";
import { ChevronDown } from "lucide-react";

import { Container } from "./shared/Container";
import navLinks from "@/constants/navData";
import { useHeaderScroll } from "@/lib/hooks/useHeaderScroll";
import { ScrollProgress } from "./ui/scroll-progress";
import NavModal from "./NavModal";

export default function Header() {
  const { headerState, positions } = useHeaderScroll();
  const DEFAULT_PY = 10;
  const REDUCED_PY = 5;

  return (
    <m.header
      initial={{ y: -150 }}
      animate={{ y: headerState === "hidden" ? -positions.desktop.topBarHeight : 0 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="fixed z-[1000] top-0 left-0 right-0"
    >
      {/* Top Header Div */}
      <div className="bg-primary-accent w-full text-white py-1">
        <Container>
          {/* Optional top bar content */}
          Puppies available now!
        </Container>
      </div>

      {/* Bottom Header Div */}
      <m.div
        className="relative z-20 border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] border-b border-primary/30"
        initial={{ paddingTop: DEFAULT_PY, paddingBottom: DEFAULT_PY }}
        animate={{
          paddingTop: headerState === "hidden" ? REDUCED_PY : DEFAULT_PY,
          paddingBottom: headerState === "hidden" ? REDUCED_PY : DEFAULT_PY,
        }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <Container>
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/">
              <div className="relative w-[140px] h-[80px]">
                <Image
                  src="/logo.webp"
                  className="object-contain"
                  priority
                  fill
                  sizes="(min-width: 780px) 186px, 140px"
                  alt="logo"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block relative ">
              <ul className="flex space-x-6">
                {navLinks.map((item) => (
                  <li key={item.href} className="relative  group">
                    <Link
                      href={item.href}
                      className="flex items-center text-primary whitespace-nowrap font-semibold hover:text-primary-accent transition-all duration-300"
                    >
                      {item.title}
                      {item.children && (
                        <ChevronDown className="ml-1 w-5 h-5 text-primary-lighter group-hover:text-primary-accent transition-colors duration-200" />
                      )}
                    </Link>
                    {item.children && (
                      <div className="absolute z-50 left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <ul className="p-4 space-y-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block text-primary-lighter hover:text-primary-accent"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Nav Modal (mobile trigger, cart, etc.) */}
            <div className="flex items-center gap-4">
              <NavModal />
            </div>
          </div>
        </Container>
      </m.div>

      <ScrollProgress className="absolute h-[3px] z-10" />
    </m.header>
  );
}
