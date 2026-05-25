import mongoose from "mongoose";
import Project from "../backend/models/Project.js";

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

mongoose.set("bufferCommands", false); // ✅ Must be BEFORE any model usage

const options = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 10000,
  family: 4,
  retryWrites: true,
  w: "majority",
};

let cached =
  global.mongoose ?? (global.mongoose = { conn: null, promise: null });

async function connectDB() {
  if (cached.conn) {
    // ✅ Verify the cached connection is still alive
    if (cached.conn.connection.readyState === 1) return cached.conn;
    // If not, reset and reconnect
    cached.conn = null;
    cached.promise = null;
  }

  if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is missing!");
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, options)
      .then((m) => m)
      .catch((err) => {
        cached.promise = null; // ✅ Reset so next request retries fresh
        throw err;
      });
  }

  cached.conn = await cached.promise;
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
