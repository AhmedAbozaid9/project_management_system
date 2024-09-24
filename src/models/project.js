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
    required: true,
  },
  github: {
    type: String,
  },
  website: {
    type: String,
  },
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
});

const Project = models.Project || model("Project", ProjectSchema);
export default Project;
