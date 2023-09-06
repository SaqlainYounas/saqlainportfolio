"use client";

import Image from "next/image";
import React from "react";

import profile from "./../../public/profile.jpg";
import {motion} from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";

export default function Intro() {
  return (
    //if everything belongs to the same semantic meaning, then we should use section to explicitly define a section
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: "tween", duration: 0.2}}
          >
            <Image
              width={192}
              height={192}
              quality={95}
              priority={true}
              alt="Avatar"
              src={profile}
              className="h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-white"
            />
          </motion.div>

          <motion.span
            className="text-2xl bottom-0 right-0  absolute"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I'm Saqlain.</span> I'm a{" "}
        <span className="font-bold">front-end web developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.1}}
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href={"#contact"}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition cursor-pointer" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 cursor-pointer"
          href="https://linkedin.com"
          target="_black"
          title="Visit Linked dot com for saqlains linkedin profile"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 cursor-pointer"
          href="https://github.com"
          target="_black"
          title="Visit Github dot com for saqlains github profile"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
