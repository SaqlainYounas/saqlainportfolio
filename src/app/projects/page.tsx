import React from "react";
import SectionHeading from "@/components/section-heading";
import getProjects from "@/actions/getProjects";
import Project from "@/components/project";
import {ProjectType} from "../../../types";

export default async function Projects() {
  const projectsData: Promise<ProjectType[]> = getProjects();
  const projects = await projectsData;

  // const {ref} = useSectionInView("Projects", 0.5);

  return (
    <div className="flex flex-col items-center px-4">
      <section id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My projects</SectionHeading>

        <div>
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
