// Import necessary dependencies
import {NextResponse} from "next/server";
import getProjects from "@/actions/getProjects";

export async function GET() {
  try {
    const projects = await getProjects();

    // Return the projects data as JSON response
    return NextResponse.json(projects);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error fetching projects:", error);
    return NextResponse.error();
  }
}
