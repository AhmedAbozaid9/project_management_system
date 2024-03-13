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
  tech: {
    type: Array,
    required: [true, "techs are required"],
  },
  status: {
    type: String,
    enum: ["Not started", "In progress", "Done"],
    default: "Not started",
  },
  type: {
    type: String,
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
  sessions: {
    type: Array,
  },
});

const Project = models.Project || model("Project", ProjectSchema);
export default Project;
