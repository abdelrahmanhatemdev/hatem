"use client"
import { cn } from "@/lib/utils";
import { memo } from "react";
import {easeInOut, motion} from "framer-motion"

export const features = [
  {
    title: "Core Features",
    list: [
      "Real-time video search",
      "Embedded video player",
      "Shorts section with auto playback",
      "Watch history stored locally",
    ],
  },
  {
    title: "UI & UX",
    list: [
      "Responsive layout with plain CSS",
      "Dark/light mode toggle",
      "Clean, YouTube-inspired design",
      "Smooth user interactions",
    ],
  },
  {
    title: "API Integration",
    list: [
      "YouTube Data API v3 integration",
      "Search, video, and channel endpoints",
      "Trending & category browsing",
      "Pagination and error handling",
    ],
  },
  {
    title: "State & Storage",
    list: [
      "React state with hooks",
      "Local storage for theme & history",
      "No external state libraries used",
      "Simple and maintainable logic",
    ],
  },
  {
    title: "Performance",
    list: [
      "Code splitting with dynamic imports",
      "Lazy loading for components",
      "Optimized image and video loading",
      "Lightweight and fast experience",
    ],
  },
  {
    title: "Accessibility",
    list: [
      "Keyboard navigation support",
      "ARIA-friendly elements",
      "Accessible color contrast",
      "Focus-visible enhancements",
    ],
  },
  {
    title: "Theming",
    list: [
      "CSS-based dark and light themes",
      "User preference saved in local storage",
      "Consistent styling across pages",
      "Minimalist and modern look",
    ],
  },
];

const Features = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6">
      <div className="bg-neutral-950/50 rounded-2xl md:rounded-[7rem] p-3 md:p-[5rem] flex flex-col gap-5 md:gap-10">
        {features.map((feature, i) => (
          <motion.div
          key={i}
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: .5,
            delay:  0.1,
            ease: easeInOut,
          }}
            className={cn(
              "flex flex-col md:flex-row justify-between md:items-end group cursor-pointer",
              i !== features.length - 1
                ? "border-b-[5px] border-neutral-50 pb-5"
                : ""
            )}
          >
            <h2 className="text-4xl md:text-[4vw] font-ogg leading-16 md:leading-24">{feature.title}</h2>
            <ul className="flex flex-col gap-3 md:w-[23vw] lg:w-[17vw]">
              {feature.list.map((item, i) => {
                return (
                  <li
                    className="text-sm md:text-[1.3vw] lg:text-[1vw] font-satoshi font-medium lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"
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
