import React from "react";
import {CgWorkAlt} from "react-icons/cg";

import notFound from "@/../public/notFound.webp";

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
    title: "Senior Associate Consultant",
    location: "TechVista Systems (United Arab Emirates)",
    description:
      "Got Selected for Onsite Transfer on Basis of Extraordinary Performance on previous projects and tough interview process.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Present",
  },
  {
    title: "Junior Consultant",
    location: "Systems Limited Pakistan.",
    description:
      "Lead Frontend Developer working on MS Dynamics 365 Commerce Projects using React & Typescript.",
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
      "Completed multiple trainings for MS Dynamics 365 Commerce, React & Typescript.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2021 - Jan 2022",
  },
] as const;

export const projectsData = [
  {
    title: "*Cannot Reveal Project Name due to NDA*",
    description:
      "Integral part of Team to implement D365 Commerce Frontend for this project.",
    detailedDescription:
      "I was part of a team that implemented the front-end for the Born Group's Microsoft Dynamics 365 Commerce project. I worked with React JS and TypeScript to create a seamless user experience. I collaborated with UI/UX teams to ensure that the website was visually appealing and user-friendly. I also worked with other cross-functional teams to ensure that the project was completed on time, however the project was abandoned due to clients internal issues. We worked a great deal in development of this website and it was a great learning experience.",
    tags: ["React", "Typescript", "MS Dynamics 365 Commerce", "SCSS", "Git"],
    imageUrl: notFound,
  },
  {
    title: "*Cannot Reveal Project Name due to NDA*",
    description:
      "Lead Frontend Developer working on this project for this project.",
    detailedDescription:
      "I was the Lead Frontend Developer for this project, that means i was responsible for the overall architecture and implementation of the front-end solution. I worked with React JS and TypeScript to create a user-friendly and visually appealing website. I collaborated with UI/UX teams to ensure that the website met the client's requirements. I also worked with other cross-functional teams to ensure that the project was completed on time. This project was a great success and the client was very happy with the final product. I learned a lot from this project and it was a great experience.",
    tags: ["React", "Typescript", "MS Dynamics 365 Commerce", "SCSS", "Git"],
    imageUrl: notFound,
  },
  {
    title: "*Cannot Reveal Project Name due to NDA*",
    description:
      "Worked in teams to implement front-end solutions dobbies using MS Dynamics 365 Commerce React and Typescript.",
    detailedDescription:
      "As a junior developer for this project i was able to apply my knowledge gained during my training period. I worked on different areas of this project which allowed me to understand a great deal about the tools i was using and the project i was working on. This project was also a success and the client was very happy with the final product. I learned a lot from this project and it was a great experience.",
    tags: ["React", "Typescript", "MS Dynamics 365 Commerce", "SCSS", "Git"],
    imageUrl: notFound,
  },
];
