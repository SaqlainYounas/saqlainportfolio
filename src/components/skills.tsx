"use client";

import {motion} from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import {useSectionInView} from "@/lib/hooks";
import {skillsData} from "@/lib/data";

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

export default function Skills() {
  const {ref} = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-23 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
