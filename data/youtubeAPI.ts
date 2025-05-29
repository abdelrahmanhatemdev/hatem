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
