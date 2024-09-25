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

    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return new Response("Project not found", { status: 404 });
    }

    return new Response("Project deleted successfully", { status: 200 });
  } catch (e) {
    console.error("Failed to delete project:", e);
    return new Response("Failed to delete the project", { status: 500 });
  }
};
