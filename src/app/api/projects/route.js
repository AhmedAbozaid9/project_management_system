import { URLSearchParams } from "url";

import { connectToDB } from "@/utils/database";
import Project from "@/models/project";

const projectsPerPage = 20;

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const page = parseInt(searchParams.get("page")) || 1;

  try {
    await connectToDB();
    const startIndex = (page - 1) * projectsPerPage;

    const projects = await Project.find({})
      .skip(startIndex)
      .limit(projectsPerPage);
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (e) {
    return new Response("Failed to get the projects", { status: 500 });
  }
};
