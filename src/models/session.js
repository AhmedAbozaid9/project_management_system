import { Schema, model, models } from "mongoose";

const SessionTime = new Schema({
  time: {
    type: Number,
  },
  project: {
    type: String,
    ref: "Project",
  },
  type: {
    type: String,
    enum: ["Stopwatch", "Timer"],
  },
  date: {
    type: Date,
  },
  user: {
    type: String,
    ref: "User",
  },
});

const Session = models.Session || model("Session", SessionTime);
export default Session;
