"use client";

import React, {useState, useEffect} from "react";
import SectionHeading from "@/components/section-heading";
import {motion} from "framer-motion";
import axios from "axios";
import {projectsData} from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export const fadeInAnimationVariants = {
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

export default function IndividualProject({params}: {params: {title: string}}) {
  const [CurrentProject, setCurrentProject] = useState<ProjectProps>();

  useEffect(() => {
    const getProjects = async () => {
      try {
        let projects = await axios.get("/api/projects");
        if (projects) {
          setCurrentProject(
            projects.data.find(
              (proj: ProjectProps) => proj.title === params.title,
            ),
          );
        }
      } catch (error) {
        console.error("Projects not found");
      }
    };

    getProjects();
  }, []);

  return (
    <div className="flex flex-col items-center px-4">
      <section
        id="skills"
        className="mb-23 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
      >
        <SectionHeading>{CurrentProject?.title}</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80 p-10">
          {CurrentProject?.detailedDescription}
        </p>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 p-5">
          {CurrentProject?.tags.map((tag: string, index: number) => (
            <motion.li
              className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {tag}
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}
