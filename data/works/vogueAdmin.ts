export const basic: BasicType = {
  name: "Vogue",
  role: "Frontend / Backend",
  type: "Dashboard",
  year: "2025",
  description: `Vogue Admin is a modern e-commerce dashboard built with
                    cutting-edge tech, offering seamless platform management
                    with essential admin modules.`,
};




export const stack: StackType = [
  "Nextjs",
  "React",
  "Typescript",
  "Tailwind",
  "Shadcn",
  "Zustand",
  "React form hook",
  "Zod",
  "Tanstack",
  "Framer Motion",
  "Swiper",
  "Recharts",
  "Firebase",
  "Redis",
  "ESLint",
  "Vercel",
];

export const homeImages: HomeImagesType = {
  home: {
    src: "/assets/media/work/vogue-admin/home-light.webp",
    alt: "Dashboard Light",
    width: 800,
    height: 495,
  },
  phone: {
    src: "/assets/media/work/vogue-admin/home-sm.webp",
    alt: "Dashboard Phone",
    width: 153,
    height: 300,
  },
};

export const links: LinkType[] = [
  {
    title: "Link",
    value: "Visit Site",
    href: "http://vogue-admin.vercel.app/",
  },
  {
    title: "Git",
    value: "Visit Git",
    href: "https://github.com/abdulrahmanhatem/vogue-admin",
  },
];

export const details: WorkDetailType[] = [
  {
    title: "Timeframe",
    value: "2 months",
  },
  {
    title: "Role",
    value: "Frontend/Backend",
  },
  {
    title: "Type",
    value: "Dashboard",
  },
  ...links,
];

export const features = [
  {
    title: "User Authorization",
    list: [
      "Email and password login",
      "Role-Based Access Control (RBAC)",
      "Firebase role-based claims",
      "Middleware-Based Authorization",
    ],
  },
  {
    title: "Data Fetching",
    list: [
      "Server-side rendering (SSR)",
      "Static site generation (SSG)",
      "Incremental static regeneration (ISR)",
      "Hybrid Fetching (Redis + Firebase)",
    ],
  },
  {
    title: "API Integrations",
    list: [
      "REST API implementation",
      "CRUD operations with Firebase",
      "API caching with Next Fetch",
      "Rate limiting & request throttling",
    ],
  },
  {
    title: "State Management",
    list: [
      "Zustand State Efficiency",
      "Optimized Data Updates",
      "Persistent Storage Management",
      "Seamless Zustand Integration",
    ],
  },
  {
    title: "Theming",
    list: [
      "Dark/light theme toggle",
      "Custom Themes Tailwind",
      "Enhanced UI Accessibility",
      "Framer Motion animations",
    ],
  },
  {
    title: "Performance",
    list: [
      "Code Splitting Optimization",
      "Memoization and Lazy loading",
      "Advanced Image Optimization",
      "Optimized Lighthouse Performance",
    ],
  },
  {
    title: "Security",
    list: [
      "Zod frontend validation",
      "Zod backend validation",
      "Secure User Authentication",
      "Advanced Rate Limiting",
    ],
  },
  {
    title: "UI & UX",
    list: [
      "Smooth UI/UX Animations",
      "Tables Pagination System",
      "Interactive Toast notifications",
      "Form Modals Functionality",
    ],
  },
];