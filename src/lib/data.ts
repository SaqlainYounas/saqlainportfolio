import React from "react";
import {CgWorkAlt} from "react-icons/cg";

import born from "@/../public/born.png";
import dobbies from "@/../public/dobbies.png";
import download from "@/../public/download.png";

export const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Skills",
    route: "/skills",
  },
  {
    name: "Projects",
    route: "/projects",
  },

  {
    name: "Contact",
    route: "/contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Associate Consultatn",
    location: "TechVista Systems (United Arab Emirates)",
    description:
      "Worked on BORN Group Project to Implement Frontend Solution using MS Dynamics 365 Commerce",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Present",
  },
  {
    title: "Junior Consultant",
    location: "Systems Limited Pakistan.",
    description:
      "Worked on Multiple Projects using MS Dynamics 365 Commerce, React & Typescript.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Nov 2023",
  },
  {
    title: "Associate Consultant",
    location: "Systems Limited Pakistan",
    description:
      "Worked on Multiple Projects using MS Dynamics 365 Commerce, React & Typescript.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Sep 2023",
  },
  {
    title: "Trainee Consultant",
    location: "Systems Limited Pakistan",
    description:
      "Worked on Multiple Projects using MS Dynamics 365 Commerce, React & Typescript.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2021 - Jan 2022",
  },
] as const;

export const projectsData = [
  {
    title: "BORN-Group",
    description:
      "Worked in teams to implement front-end solutions for MS D365 Commerce Projects, utilizing React JS and TypeScript.",
    detailedDescription:
      "Collaborating with cross-functional teams to architect and implement front-end solutions for Microsoft Dynamics 365 Commerce Projects, utilizing the power of React JS and TypeScript. Engaging with dedicated UI/UX teams to master and contribute to the styling and aesthetics of websites, ensuring seamless user experiences.",
    tags: ["React", "Typescript", "MS Dynamics 365 Commerce", "SCSS", "Git"],
    imageUrl: born,
  },
  {
    title: "Britax-Romers",
    description:
      "Worked in teams to implement front-end solutions for MS D365 Commerce Projects, utilizing React JS and TypeScript.",
    detailedDescription:
      "Collaborating with cross-functional teams to architect and implement front-end solutions for Microsoft Dynamics 365 Commerce Projects, utilizing the power of React JS and TypeScript. Engaging with dedicated UI/UX teams to master and contribute to the styling and aesthetics of websites, ensuring seamless user experiences.",
    tags: ["React", "Typescript", "MS Dynamics 365 Commerce", "SCSS", "Git"],
    imageUrl: download,
  },
  {
    title: "Dobbies",
    description:
      "Worked in teams to implement front-end solutions for MS D365 Commerce Projects, utilizing React JS and TypeScript.",
    detailedDescription:
      "Collaborating with cross-functional teams to architect and implement front-end solutions for Microsoft Dynamics 365 Commerce Projects, utilizing the power of React JS and TypeScript. Engaging with dedicated UI/UX teams to master and contribute to the styling and aesthetics of websites, ensuring seamless user experiences.",
    tags: ["React", "Typescript", "MS Dynamics 365 Commerce", "SCSS", "Git"],
    imageUrl: dobbies,
  },
];
