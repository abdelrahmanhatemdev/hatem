export const basic = {
    name: "Vogue", 
    role: "Frontend / Backend",
    type: "Dashboard", 
    year: "2025",
    description: `Vogue Admin is a modern e-commerce dashboard built with
                    cutting-edge tech, offering seamless platform management
                    with essential admin modules.`

}

export const stack = [
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

  export const links = [
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

  export const details: {
    title: string,
    value: string,
    href?: string,
  }[] = [
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
   ...links
  ];

