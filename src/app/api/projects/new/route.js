import { connectToDB } from "@/utils/database";
import Project from "@/models/project";
import {uploadImage} from "@/utils/uploadImage";

export const POST = async (request) => {
  const projectDetails = await request.json();

  try {
    connectToDB();
   const image_url = await uploadImage(projectDetails.image)
    console.log(image_url)
    const newProject = new Project({
      ...projectDetails,
      image: image_url,
    });
    await newProject.save();

    return new Response(JSON.stringify(projectDetails), { status: 201 });
  } catch (e) {
    return new Response("Failed to save the project", { status: 500 });
  }
};
