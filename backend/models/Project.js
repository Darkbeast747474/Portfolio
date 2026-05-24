import mongoose from "mongoose";

const MetricSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true }
});

const MethodologySchema = new mongoose.Schema({
  step: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String },
  image: { type: String },
  tags: [{ type: String }],
  category: { type: String },
  metrics: [MetricSchema],
  methodology: [MethodologySchema]
}, { timestamps: true });

export const Project = mongoose.model("Project", ProjectSchema);
