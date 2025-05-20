import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  category: { type: String, required: false },
  image: { type: String, required: true },
});

const eventModel =
  mongoose.models.event || mongoose.model("event", eventSchema);

export default eventModel;
