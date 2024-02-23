"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
  //if 75% of the element is in the view then we want to change the state
  const {ref} = useSectionInView("Home");

  return (
    <motion.section
      className="mb-23 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.15}}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have always been interested in{" "}
        <span className="font-medium">Software Engineering</span>, I decided to
        pursue my passion for computers a long time ago. I enrolled in a coding
        bootcamps and learned{" "}
        <span className="font-medium">
          about computers coding and how they work
        </span>
        . <span>My favorite part of programming</span> is the problem-solving
        aspect. I <span>love</span> the feeling of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, & TypeScript
        </span>
        . I am also familiar with GSAP and Framer motion. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
