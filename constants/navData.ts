export type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
};

const navLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about/" },
  {title:"Litters",href:"/litters/"},
  {
    title: "Our Dogs",
    href: "/dogs/",
    // children: [
    //   { title: "Thor", href: "/dogs/thor" },
    //   { title: "Winston", href: "/dogs/winston" },
    //   { title: "Luna", href: "/dogs/luna" },
    //   { title: "Bella", href: "/dogs/bella" },
    // ],
  },
  //  {
  //    title: "Puppies",
  //    href: "/puppies",
  //    children: [
  //      { title: "Parker", href: "/puppies/parker" },
  //      { title: "Hazel", href: "/puppies/hazel" },
     
  //      { title: "Brownie", href: "/puppies/brownie" },
       
  //    ],
  //  },

  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog & Tips", href: "/blog/" },
      { title: "About Corgies", href: "/breed/" },
      { title: "Contact Us", href: "/contact/" },
      { title: "Gallery", href: "/gallery/" },
    ],
  },

  // { title: "Contact", href: "/contact" },
];

export default navLinks;
