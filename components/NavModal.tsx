// app/components/NavModal.tsx
"use client";

import React from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import navLinks from "@/constants/navData";

import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "./ui/animated-modal";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

import RippleLinkButton from "./shared/RippleLinkButton";

// ——— A single link that closes the menu on click and highlights if active ———
function NavItemLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { setOpen } = useModal();
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className={cn(
          "block w-full px-4 py-3 rounded-md transition-colors",
          isActive
            ? "text-primary-accent font-semibold border-l-4 border-primary-accent bg-primary-accent/10"
            : "text-gray-800 hover:bg-gray-100"
        )}
      >
        {children}
      </Link>
    </li>
  );
}

function ModalHeader() {
  const { setOpen } = useModal();
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-gradient-accent text-white shadow-md">
      <h2 className="text-lg font-semibold">Menu</h2>
      <FaXmark
        onClick={() => setOpen(false)}
        className="w-6 h-6 cursor-pointer text-white"
      />
    </div>
  );
}

function ModalFooterMain() {
  const { setOpen } = useModal();
  return (
    <ModalFooter className="px-4 pt-6 pb-8 bg-gray-50">
      <RippleLinkButton
        href="/contact"
        onClick={() => setOpen(false)}
        className="w-full text-center"
      >
        Contact Us
      </RippleLinkButton>
    </ModalFooter>
  );
}

export default function NavModal() {
  return (
    <Modal>
      <ModalTrigger className="lg:hidden">
        <MdMenu className="w-8 h-8 text-primary" />
      </ModalTrigger>

      <ModalBody
        side="right"
        className="size-full bg-white shadow-lg overflow-hidden"
      >
        <ModalHeader />

        <ModalContent className="flex-1 overflow-y-auto">
          <nav aria-label="Mobile navigation" className="px-2 py-4">
            <ul className="space-y-1">
              {navLinks.map((item) =>
                item.children ? (
                  <li key={item.title}>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem value={item.title}>
                        <AccordionTrigger className="flex w-full justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="mt-1 space-y-1">
                            {item.children.map((child) => (
                              <NavItemLink
                                key={child.href}
                                href={child.href}
                              >
                                {child.title}
                              </NavItemLink>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                ) : (
                  <NavItemLink key={item.href} href={item.href}>
                    {item.title}
                  </NavItemLink>
                )
              )}
            </ul>
          </nav>
        </ModalContent>

        <ModalFooterMain />
      </ModalBody>
    </Modal>
  );
}
