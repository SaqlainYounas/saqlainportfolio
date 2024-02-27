// Import necessary dependencies
import {NextResponse} from "next/server";
import {projectsData} from "@/lib/data";

export async function GET() {
  try {
    const projects = projectsData;

    // Return the projects data as JSON response
    return NextResponse.json(projects);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error fetching projects:", error);
    return NextResponse.error();
  }
}
