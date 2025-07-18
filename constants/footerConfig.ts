// app/config/footerConfig.ts
import { MapPinIcon, PhoneIcon } from "lucide-react";
// import { TbMapPin2 } from "react-icons/tb";
import { BsEnvelopeAt } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const footerConfig = {
  helpSupport: {
    title: "Help & Support",
    contacts: [
      {
        icon: MapPinIcon,
        valueKey: "685 Market Street, Las Vegas, LA 95820, United States",
      },
      {
        icon: PhoneIcon,
        valueKey: "+387 61 250 293",
      },
      {
        icon: BsEnvelopeAt,
        valueKey: "spark.studio.dev@gmail.com",
      },
    ],
    socials: [
      { icon: FaFacebook, href: "https://facebook.com/", label: "Facebook" },
      { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
      { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
      { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    ],
  },
  mainNavigation: [
    { href: "/", title: "Home" },

    { href: "/about", title: "About" },
    { href: "/litters", title: "Litters" },
    { href: "/dogs", title: "Our Dogs" },
  ],
  subsidiaryLinks: [
    { href: "/blog", title: "Blog & Tips" },
    { href: "/breed", title: "About Corgies" },
    { href: "/gallery", title: "Image Gallery" },
    { href: "/contact", title: "Contact Us" },
    
  ],
  connect: [
      { icon: FaFacebook, href: "https://facebook.com/", label: "Facebook" },
      { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
      { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
      // { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    ],
} as const;
