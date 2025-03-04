"use client"
import { cn } from "@/lib/utils";
import { memo } from "react";
import {easeInOut, motion} from "framer-motion"

const featues = [
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

const Features = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="bg-neutral-950/50 rounded-2xl md:rounded-[7rem] p-3 md:p-[5rem] flex flex-col gap-5 md:gap-10">
        {featues.map((featue, i) => (
          <motion.div
          key={i}
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay:  i * 0.1,
            ease: easeInOut,
          }}
            className={cn(
              "flex flex-col md:flex-row justify-between md:items-end group cursor-pointer",
              i !== featues.length - 1
                ? "border-b-[5px] border-neutral-50 pb-5"
                : ""
            )}
          >
            <h2 className="text-4xl md:text-[5vw] font-ogg leading-16 md:leading-24">{featue.title}</h2>
            <ul className="flex flex-col gap-3 w-[280px]">
              {featue.list.map((item, i) => {
                return (
                  <li
                    className="text-sm md:text-base font-satoshi font-medium lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"
                    style={{
                      transitionDelay: i !== 0 ? `${i * 50}ms` : "",
                    }}
                    key={i}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default memo(Features);
