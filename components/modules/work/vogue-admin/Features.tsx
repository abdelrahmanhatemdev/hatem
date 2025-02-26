import { cn } from "@/lib/utils";
import { memo } from "react";

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
    <section className="mt-32 px-6">
      <div className="bg-neutral-950/50 rounded-[7rem] p-[5rem] flex flex-col gap-10">
        {featues.map((featue, index) => (
          <div
            className={cn(
              "flex justify-between items-end group cursor-pointer",
              index !== featues.length - 1
                ? "border-b-[5px] border-neutral-50 pb-5"
                : ""
            )}
            key={index}
          >
            <h2 className="text-[5vw] font-ogg leading-24">{featue.title}</h2>
            <ul className="flex flex-col gap-3 w-[280px]">
              {featue.list.map((item, i) => {
                return (
                  <li
                    className="font-satoshi font-medium opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      transitionDelay:
                        i !== 0 ? `${i * 80}ms` : "",
                    }}
                    key={i}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default memo(Features);
