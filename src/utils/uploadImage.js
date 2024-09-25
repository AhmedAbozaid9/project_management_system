import { v2 as cloudinary } from "cloudinary";

export const uploadImage = async (file) => {
  // Configuration
  cloudinary.config();

  // Upload an image
  const uploadResult = await cloudinary.uploader.upload(file).catch((error) => {
    console.log(error);
  });

  return uploadResult.url;
};
