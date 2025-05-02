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
      "Watch history saved locally",
    ],
  },
  {
    title: "UI & UX",
    list: [
      "Responsive design across devices",
      "Dark/light mode toggle",
      "Smooth transitions and interactions",
      "Modern YouTube-inspired layout",
    ],
  },
  {
    title: "API Integration",
    list: [
      "YouTube Data API v3 integration",
      "Search, video, and channel endpoints",
      "Trending and category-based browsing",
      "Pagination and loading states",
    ],
  },
  {
    title: "State & Storage",
    list: [
      "Local storage for user preferences",
      "History and theme persistence",
      "Simple state logic with React hooks",
      "No external state libraries used",
    ],
  },
  {
    title: "Performance",
    list: [
      "Lazy loading of components",
      "Code splitting via dynamic imports",
      "Optimized image thumbnails",
      "Fast and lightweight architecture",
    ],
  },
  {
    title: "Accessibility",
    list: [
      "Keyboard-friendly navigation",
      "Screen-reader friendly labels",
      "Focus outlines for inputs and buttons",
      "High-contrast support in dark mode",
    ],
  },
  {
    title: "Theming",
    list: [
      "Tailwind-powered dark/light themes",
      "Customizable color palette",
      "Consistent UI across views",
      "User preference stored in local storage",
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
            duration: .5,
            delay:  0.1,
            ease: easeInOut,
          }}
            className={cn(
              "flex flex-col md:flex-row justify-between md:items-end group cursor-pointer",
              i !== featues.length - 1
                ? "border-b-[5px] border-neutral-50 pb-5"
                : ""
            )}
          >
            <h2 className="text-4xl md:text-[4vw] font-ogg leading-16 md:leading-24">{featue.title}</h2>
            <ul className="flex flex-col gap-3 md:w-[23vw] lg:w-[17vw]">
              {featue.list.map((item, i) => {
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
