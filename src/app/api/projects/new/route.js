import { connectToDB } from "@/utils/database";
import Project from "@/models/project";
import { uploadImage } from "@/utils/uploadImage";

export const POST = async (request) => {
  const { projectDetails, userId } = await request.json();

  try {
    connectToDB();
    const image_url = await uploadImage(projectDetails.image);
    const newProject = new Project({
      ...projectDetails,
      image: image_url,
      userId,
    });
    await newProject.save();

    return new Response(JSON.stringify(projectDetails), { status: 201 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to save the project", { status: 500 });
  }
};
