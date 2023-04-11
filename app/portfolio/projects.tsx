import { NextIcon, ReactIcon, TailwindIcon } from "components/icons";

interface Project {
  title: string;
  description: string;
  techLogos: React.ReactNode[];
  repoLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    title: "NextJS Portfolio Website 💻🙆‍♂️",
    description:
      "Built a personal portfolio website using React, Next.js 13, and TailwindCSS.",
    techLogos: [<ReactIcon />, <NextIcon />, <TailwindIcon />],
    repoLink: "https://google.com",
    demoLink: "https://google.com",
  },
  {
    title: "Oasis Massage Saanich",
    description:
      "A responsive, static website made for a local business using Material UI and deployed using Firebase.",
    techLogos: [],
    repoLink: "https://google.com",
    demoLink: "https://google.com",
  },
  {
    title: "Awesome project",
    description: "Project Description",
    techLogos: [],
    repoLink: "https://google.com",
    demoLink: "https://google.com",
  },
];

export { projects };
