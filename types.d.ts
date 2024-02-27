import {links} from "@/lib/data";
import {projectsData} from "@/lib/data";

type Project = {
  title: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  imageUrl: StaticImageData;
};

type queryType = {
  queryString: string;
};

type Skills = {
  Skills: string[];
};

type SectionName = (typeof links)[number]["name"];
type ProjectProps = (typeof projectsData)[number];
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
