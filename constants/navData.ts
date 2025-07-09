export type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
}

const navLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Our Dogs",
    href: "/dogs",
    children: [
      { title: "Duke", href: "/dogs/duke" },
      { title: "Luna", href: "/dogs/luna" },
      { title: "Milo", href: "/dogs/milo" },
    ],
  },
  {
    title: "Puppies",
    href: "/puppies",
    children: [
      { title: "Parker", href: "/puppies/parker" },
      { title: "Hazel", href: "/puppies/hazel" },
      { title: "Bear", href: "/puppies/bear" },
    ],
  },
  {
    title: "Health & Testing",
    href: "/health-testing",
    children: [
      { title: "Protocols & Certifications", href: "/health-testing" },
      { title: "Genetic Screens", href: "/genetic-testing" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog & Tips", href: "/blog" },
      { title: "Testimonials", href: "/testimonials" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

export default navLinks;
