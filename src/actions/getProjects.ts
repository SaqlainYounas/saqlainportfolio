import {projectsData} from "@/lib/data";
import axios from "axios";
import {ProjectType} from "../../types";

export default async function getProjects() {
  try {
    let response: ProjectType[] = projectsData;
    return response;
  } catch (error) {
    throw new Error("Failed to Fetch Data");
  }
}
