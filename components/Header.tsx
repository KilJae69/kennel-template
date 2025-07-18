// app/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "motion/react";

import { Container } from "./shared/Container";
import navLinks from "@/constants/navData";
import { useHeaderScroll } from "@/lib/hooks/useHeaderScroll";
import { ScrollProgress } from "./ui/scroll-progress";
import NavModal from "./NavModal";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import RippleLinkButton from "./shared/RippleLinkButton";

export default function Header() {
  const { headerState, positions } = useHeaderScroll();
  const DEFAULT_PY = 10;
  const REDUCED_PY = 5;

  return (
    <m.header
      initial={{ y: -150 }}
      animate={{
        y: headerState === "hidden" ? -positions.desktop.topBarHeight : 0,
      }}
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
            <Link className="flex-1 lg:flex-0" href="/">
              <div className="relative max-w-[140px] lg:w-[140px] h-[80px]">
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

            <NavigationMenu className="hidden flex-1 lg:block" viewport={false}>
              <NavigationMenuList className="flex space-x-6">
                {navLinks.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="text-primary whitespace-nowrap font-semibold hover:text-primary-accent bg-transparent data-[state=open]:bg-transparent">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 border-primary-accent p-0 top-full bg-white shadow-lg rounded-lg">
                          <ul className="grid w-[200px] gap-2 p-4">
                            {item.children.map((child) => (
                              <ListItem
                                key={child.href}
                                href={child.href}
                                title={child.title}
                              />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={
                            "text-primary whitespace-nowrap font-semibold hover:text-primary-accent bg-transparent"
                          }
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Nav Modal Mobile */}
            <div className="flex   items-center gap-4">
              <RippleLinkButton className="text-md whitespace-nowrap px-4 py-2" href="/contact">
                Contact Us
              </RippleLinkButton>{" "}
              <NavModal />
            </div>
           
          </div>
        </Container>
      </m.div>

      <ScrollProgress className="absolute h-[3px] z-10" />
    </m.header>
  );
}

const ListItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block w-full text-primary-lighter hover:text-primary-accent whitespace-nowrap"
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
