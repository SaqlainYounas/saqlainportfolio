"use client";

import React from "react";
import {motion} from "framer-motion";
import {fadeInAnimationVariants} from "@/lib/types";

interface AnimatedListProps {
  index: number;
  skill: string;
}

const AnimatedList: React.FunctionComponent<AnimatedListProps> = ({
  index,
  skill,
}) => {
  return (
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
  );
};

export default AnimatedList;
