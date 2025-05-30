export const basic: BasicType = {
  name: "Youtube API",
  role: "Frontend",
  type: "Streaming UI",
  year: "2024",
  description: `A modern YouTube UI clone built with React.js and the YouTube Data API.
                  Fast, responsive, and fully functional — browse, search, and watch videos in a sleek, app-like experience.`,
};

export const stack: StackType = [
  "React",
  "Javascript",
  "CSS",
  "React Router",
  "Axios",
  "Youtube API",
  "Github Pages",
];

export const homeImages: HomeImagesType = {
  home: {
    src: "/assets/media/work/youtube-api/home-light.webp",
    alt: "Dashboard Light",
    width: 800,
    height: 495,
  },
  phone: {
    src: "/assets/media/work/youtube-api/home-sm.webp",
    alt: "Dashboard Phone",
    width: 153,
    height: 300,
  },
};

export const links: LinkType[] = [
  {
    title: "Link",
    value: "Visit Site",
    href: "https://abdelrahmanhatemdev.github.io/youtube-api/",
  },
  {
    title: "Git",
    value: "Visit Git",
    href: "https://github.com/abdelrahmanhatemdev/youtube-api",
  },
];

export const details: WorkDetailType[] = [
  {
    title: "Timeframe",
    value: "1 week",
  },
  {
    title: "Role",
    value: "Frontend",
  },
  {
    title: "Type",
    value: "Streaming UI",
  },
  ...links,
];

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