"use client";

import {motion} from "framer-motion";
import React from "react";
import SectionHeading from "@/components/section-heading";
import {useSectionInView} from "@/lib/hooks";
import {skillsData} from "@/lib/data";
import {fadeInAnimationVariants} from "@/lib/types";

export default function Skills() {
  const {ref} = useSectionInView("Skills");
  return (
    <div className="flex flex-col items-center px-4">
      <section
        ref={ref}
        id="skills"
        className="mb-23 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
      >
        <SectionHeading>My Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
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
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}
