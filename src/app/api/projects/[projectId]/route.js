import { connectToDB } from "@/utils/database";
import Project from "@/models/project";

export const GET = async (_, { params }) => {
  const projectId = params.projectId;

  try {
    await connectToDB();

    const project = await Project.findById(projectId);

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (e) {
    return new Response("Failed to get the project", { status: 500 });
  }
};
export const DELETE = async (_, { params }) => {
  const projectId = params.projectId;

  try {
    await connectToDB();

    const project = await Project.findById(projectId);
    project.remove();

    return new Response("project deleted successfully", { status: 204 });
  } catch (e) {
    return new Response("Failed to get the project", { status: 500 });
  }
};
