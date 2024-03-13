import { Schema, model, models } from "mongoose";

const SessionTime = new Schema({
  session: {
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
});

const Session = models.Session || model("Session", SessionTime);
export default Session;
