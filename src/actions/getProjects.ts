import {projectsData} from "@/lib/data";
import axios from "axios";
import {Project} from "../../types";

export default async function getProjects() {
  try {
    let response: Project[] = projectsData;
    return response;
  } catch (error) {
    throw new Error("Failed to Fetch Data");
  }
}
