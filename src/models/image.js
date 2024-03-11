import { Schema, model, models } from "mongoose";

const ImageSchema = new Schema({
  image: {
    type: String,
    required: [true, "project image is required"],
  },
});

const Image = models.Image || model("Image", ImageSchema);
export default Image;
