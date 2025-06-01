export const basic: BasicType = {
  name: "Simone",
  slug: "simone",
  role: "Frontend",
  type: "Agency",
  year: "2025",
  description: `Simone is a modern website built for an Italian furniture agency,
                blending elegant design with functional UI to showcase premium
                furniture collections and promote the brand's aesthetic online.`,
};

export const stack: StackType = [
  "Nextjs",
  "React",
  "Typescript",
  "Tailwind",
  "Shadcn",
  "Framer Motion",
  "Swiper",
  "ESLint",
  "Vercel",
];

export const homeImages: HomeImagesType = {
  home: {
    src: "/assets/media/work/simone/home-light.webp",
    alt: "Simone Furniture Website Light",
    width: 800,
    height: 495,
  },
  phone: {
    src: "/assets/media/work/simone/home-sm.webp",
    alt: "Simone Furniture Website Phone",
    width: 153,
    height: 300,
  },
};

export const links: LinkType[] = [
  {
    title: "Link",
    value: "Visit Site",
    href: "https://paolo-simone.vercel.app/",
  },
  {
    title: "Git",
    value: "Visit Git",
    href: "https://github.com/abdelrahmanhatemdev/simone",
  },
];

export const details: WorkDetailType[] = [
  {
    title: "Timeframe",
    value: "7 days",
  },
  {
    title: "Role",
    value: "Frontend",
  },
  {
    title: "Type",
    value: "Agency",
  },
  ...links,
];

export const features = [
  {
    title: "Design & Branding",
    list: [
      "Elegant, Italian-inspired design",
      "Minimalistic layout",
      "Responsive and modern typography",
      "High-resolution image presentation",
    ],
  },
  {
    title: "Animations",
    list: [
      "Smooth scroll-based animations",
      "Framer Motion for transitions",
      "Image and text fade-ins",
      "Subtle hover interactions",
    ],
  },
  {
    title: "Performance",
    list: [
      "Static site generation (SSG)",
      "Optimized image loading",
      "Lazy loading and prefetching",
      "Deployed on Vercel with CI/CD",
    ],
  },
  {
    title: "Product Showcase",
    list: [
      "Swiper carousel for collections",
      "Dedicated product category sections",
      "Interactive gallery view",
      "Clean CTA and inquiry prompts",
    ],
  },
  {
    title: "Responsiveness",
    list: [
      "Mobile-first layout strategy",
      "Grid-based flexible sections",
      "Fully responsive product grids",
      "Tested on major devices",
    ],
  },
  {
    title: "Code Quality",
    list: [
      "Type-safe with TypeScript",
      "Reusable component architecture",
      "Tailwind + Shadcn UI components",
      "Linting and clean code structure",
    ],
  },
];
