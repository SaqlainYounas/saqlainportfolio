import {links} from "@/lib/data";
import {projectsData} from "@/lib/data";

type ProjectType = {
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
