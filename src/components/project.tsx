"use client";

import {StaticImageData} from "next/image";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    //0 means the bottom of the view port, 1 means top of the target. so we want to catch when the bottom of the view port reaches the top of the target
    //1.33 means that the bottom of the view port has gone 33% beyond the end of the target
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{scale: scaleProgress, opacity: opacityProgress}}
      className="group  mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] rounded-lg border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  hover:bg-gray-200 group-even:pl-8 transition">
        <div className="py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] even:pl-8">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-5 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={"Projects i've worked on"}
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-hover:scale-[1.04]   transition "
        />
      </section>
    </motion.div>
  );
}
