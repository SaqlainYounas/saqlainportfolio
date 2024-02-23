"use client";

import React, {useState, useEffect} from "react";
import SectionHeading from "@/components/section-heading";
import {ProjectProps} from "@/lib/types";
import Project from "@/components/project";
import axios from "axios";
import {useSectionInView} from "@/lib/hooks";
import Loader from "@/components/loader";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    const getProjects = async () => {
      try {
        let response = await axios.get("/api/projects");
        if (response) {
          setProjects(response.data);
          setLoading(false); // Set loading to false when projects are fetched
        }
      } catch (error) {
        console.error("Projects not found");
        setLoading(false); // Set loading to false if there's an error
      }
    };

    getProjects();
  }, []);

  const {ref} = useSectionInView("Projects", 0.5);

  return (
    <div className="flex flex-col items-center px-4">
      <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My projects</SectionHeading>
        {/* Conditional rendering based on loading state */}
        {loading ? (
          <Loader /> // Render loader while projects are loading
        ) : (
          <div>
            {projects.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
