import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  title: {
    type: String,
    unique: [true, "Project already exists!"],
    required: [true, "title is required!"],
  },
  date: {
    type: Date,
  },

  status: {
    type: String,
    enum: ["Not started", "In progress", "Done"],
    default: "Not started",
  },

  image: {
    type: String,
    ref: "Image",
    required: true,
  },
  github: {
    type: String,
  },
  website: {
    type: String,
  },
});

const Project = models.Project || model("Project", ProjectSchema);
export default Project;
