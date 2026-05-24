import mongoose from "mongoose";
import Project from "../backend/models/Project.js"; // reuse your model

const MONGO_URI = process.env.MONGO_URI;

let cached = global.mongoose || { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const projects = await Project.find({});
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
