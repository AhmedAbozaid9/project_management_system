import { connectToDB } from "@/utils/database";
import Project from "@/models/project";
import Image from "@/models/image";

export const POST = async (request) => {
  const projectDetails = await request.json();
  console.log(projectDetails);

  try {
    connectToDB();
    const newImage = new Image({ image: projectDetails.image });
    console.log(newImage);
    const savedImage = await newImage.save();
    console.log(savedImage);
    const newProject = new Project({
      ...projectDetails,
      image: savedImage._id,
    });
    await newProject.save();

    return new Response(JSON.stringify(projectDetails), { status: 201 });
  } catch (e) {
    return new Response("Failed to save the project", { status: 500 });
  }
};
