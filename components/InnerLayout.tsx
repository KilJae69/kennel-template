"use client"
import { domAnimation, LazyMotion } from "motion/react";
import { ReactNode } from "react";
import Header from "./Header";

export default function InnerLayout({children}:{children:ReactNode}) {
  return (
     <LazyMotion features={domAnimation}>
          <Header />
          <main className="">{children}</main>
          <div id="modal-root"></div>
        </LazyMotion>
  );
  
}