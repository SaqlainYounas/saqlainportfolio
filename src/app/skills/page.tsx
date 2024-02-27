import React from "react";
import SectionHeading from "@/components/section-heading";
import AnimatedList from "@/components/list";
import getData from "@/actions/getSkills";

export default async function Skills() {
  const data = await getData({queryString: "skills"});
  const {Skills} = data[0];

  return (
    <div className="flex flex-col items-center px-4">
      <section
        id="skills"
        className="mb-23 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
      >
        <SectionHeading>My Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {Skills.map((item: string, index: number) => (
            <AnimatedList skill={item} index={index} />
          ))}
        </ul>
      </section>
    </div>
  );
}
