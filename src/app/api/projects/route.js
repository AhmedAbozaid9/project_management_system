import { connectToDB } from "@/utils/database";
import Project from "@/models/project";

export const GET = async () => {
  try {
    await connectToDB();
    const projects = await Project.find({});
    console.log(projects);
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (e) {
    return new Response("Failed to get the projects", { status: 500 });
  }
};
