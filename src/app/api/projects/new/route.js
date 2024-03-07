import { connectToDB } from "@/utils/database";
import Project from "@/models/project";

export const POST = async (request) => {
  const projectDetails = await request.json();
  console.log(projectDetails);
  try {
    connectToDB();
    const newProject = new Project(projectDetails);
    await newProject.save();

    return new Response(JSON.stringify(projectDetails), { status: 201 });
  } catch (e) {
    return new Response("Failed to save the project", { status: 500 });
  }
};
