import mongoose from "mongoose";
import Project from "../backend/models/Project.js";

// Safe fallback for environment variable naming conventions
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

// Production serverless network optimizations
const options = {
  bufferCommands: false, // Crash immediately if the connection drops instead of freezing
  serverSelectionTimeoutMS: 5000, // Terminate connection attempts at 5 seconds max
  family: 4, // Force IPv4 resolution to prevent Node 24 DNS hangs
  retryWrites: true,
  w: "majority",
};

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI environment variable is missing!");
    }
    cached.promise = mongoose.connect(MONGO_URI, options).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // Reset cache state on failure so subsequent requests can retry
    throw e;
  }
  return cached.conn;
}

export default async function handler(req, res) {
  // 1. Establish database connection
  try {
    await connectDB();
  } catch (dbError) {
    console.error("Database connection failed:", dbError.message);
    return res
      .status(500)
      .json({ error: "Database connection failed", details: dbError.message });
  }

  // 2. Handle API Request
  if (req.method === "GET") {
    try {
      const projects = await Project.find({});
      return res.status(200).json(projects);
    } catch (err) {
      console.error("Fetch error:", err.message);
      return res
        .status(500)
        .json({ error: "Failed to fetch projects", details: err.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
