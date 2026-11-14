export const site = {
  name: "Rana Ebrahim",
  role: "Product Designer",
  location: "Cairo, Egypt",
  email: "ranaebrahim@aucegypt.edu",
  tagline: "Product designer blending tech know-how with a love for aesthetics.",
  openToWork: true,
  links: {
    linkedin: "https://www.linkedin.com/in/rana-ebrahim-875614175",
    behance: "https://www.behance.net/",
    resume: "#",
  },
} as const;

export const navItems: {
  href: string;
  label: string;
  exact?: boolean;
}[] = [
  { href: "/", label: "Rana Ebrahim", exact: true },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export const about = {
  eyebrow: "About",
  headline: "I'm Rana, a product designer in Cairo, Egypt.",
  paragraphs: [
    "Born and raised in Egypt, I graduated from The American University in Cairo with a major in Marketing and double minors in Computer Science and Interactive Design. As a product designer, I blend tech know-how with a love for aesthetics in everything I create.",
    "To me, design is about the story it tells — not just how it looks. I care about the small moments people encounter while using a product: whether a flow feels clear after a tap, how feedback lands, and whether the interface helps someone feel confident.",
    "I work across e-commerce, fintech, and consumer products. Prototyping in code lets me explore how an interface feels while I'm still figuring it out — try an interaction, change it, and see what happens.",
  ],
};

export const career = [
  {
    company: "noon",
    role: "Product Designer",
    dates: "2025–Present",
    logo: "N",
    color: "#FEEE00",
    textColor: "#111111",
  },
  {
    company: "Fawry",
    role: "Junior Product Designer",
    dates: "2024–2025",
    logo: "F",
    color: "#E31C23",
    textColor: "#FFFFFF",
  },
  {
    company: "Promolinks International",
    role: "UX Designer",
    dates: "2023–2024",
    logo: "P",
    color: "#1A56DB",
    textColor: "#FFFFFF",
  },
  {
    company: "The American University in Cairo",
    role: "Studio Assistant · Content Creator",
    dates: "2020–2022",
    logo: "A",
    color: "#C4A35A",
    textColor: "#FFFFFF",
  },
] as const;

export const techStack = [
  {
    category: "Design",
    items: ["Figma", "FigJam", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    category: "Development",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "AI tools",
    items: ["Cursor", "Claude", "ChatGPT"],
  },
  {
    category: "Research & delivery",
    items: ["User interviews", "Usability testing", "Design systems"],
  },
] as const;

export const expertise = [
  "E-commerce",
  "Fintech & payments",
  "Consumer apps",
  "Design systems",
  "Prototyping in code",
  "Interaction design",
] as const;

export const projects = [
  {
    slug: "noon",
    title: "noon",
    description:
      "Product design for one of the Middle East's largest online shopping platforms — shaping flows that help millions of shoppers discover, decide, and buy.",
    category: "E-commerce",
    year: "2025",
    href: "https://www.noon.com",
    external: true,
  },
  {
    slug: "fawry",
    title: "Fawry",
    description:
      "Junior product design for Egypt's leading e-payments and digital finance platform — making everyday money tasks clearer and more trustworthy.",
    category: "Fintech",
    year: "2024",
    href: "https://fawry.com",
    external: true,
  },
  {
    slug: "reddit-redesign",
    title: "Reddit redesign",
    description:
      "A cleaner, more intuitive Reddit experience with updated UI, smarter search filters, and an AI helper for common questions.",
    category: "Case study",
    year: "2024",
    href: "https://www.linkedin.com/posts/rana-ebrahim-875614175_uxdesign-reddit-userexperience-activity-7215625614387531776-rgGZ",
    external: true,
  },
  {
    slug: "quitkit",
    title: "QuitKit",
    description:
      "An emotionally engaging mobile app for quitting smoking — tobacco tracking, progress updates, motivational content, and social support.",
    category: "Health",
    year: "2023",
    href: "#",
    external: false,
  },
] as const;

export const writing = [
  {
    title: "Design is the story it tells",
    excerpt:
      "Notes on why concept comes before visual polish — and how that shows up in product work.",
    date: "2025",
    href: "#",
  },
  {
    title: "Prototyping in code as a designer",
    excerpt:
      "How working directly in an interface changes the questions I ask about interaction and feedback.",
    date: "2025",
    href: "#",
  },
] as const;
