"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {useSectionInView} from "@/lib/hooks";

import {motion} from "framer-motion";
import {sendEmail} from "@/actions/sendEmail";

import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const {ref} = useSectionInView("Contact");

  return (
    <motion.section
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-40 scroll-mt-28"
      ref={ref}
      id="contact"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{
        delay: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const {data, error} = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email Sent successfully!");
        }}
      >
        <input
          className="h-14 rounded-lg border border-black/10  px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="Your email"
          name="email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3  p-4   rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
