import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import InnerLayout from "@/components/InnerLayout";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"], // Choose language subsets as needed
  weight: ["200", "300", "400", "500", "700"], // Include only the weights you use
  variable: "--font-poppins", // Optional CSS variable
  preload: true, // Ensures the font is preloaded automatically
});

export const metadata: Metadata = {
  title: "Maple Grove Corgis",
  description: "Champion bloodlines & family-first care since 2010",
  openGraph: {
    title: "Maple Grove Corgis",
    description: "Champion bloodlines & family-first care since 2010",
    url: "https://maple-grove-corgis.vercel.app/",
    siteName: "Maple Grove Corgis",
    images: [
      {
        url: "/og-default.png", // <-- your default OG image
        width: 1200,
        height: 630,
        alt: "Maple Grove Corgis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Grove Corgis",
    description: "Champion bloodlines & family-first care since 2010",
    images: ["/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body
        className={`${poppins.className} flex min-h-full flex-col antialiased`}
      >
        <InnerLayout>
          {children}
          <Toaster />
        </InnerLayout>
      </body>
    </html>
  );
}
