import mongoose from "mongoose";
import Message from "../backend/models/Message.js";

// Look for either standard naming convention to protect against typos
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

// Set strict network controls to stop serverless hangs
const options = {
  bufferCommands: false, // Crash instantly if connection drops instead of freezing
  serverSelectionTimeoutMS: 5000, // Kill the attempt at 5s max so Vercel doesn't hit a 10s timeout
  family: 4, // Force IPv4 resolution for Node 24 compatibility
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
    cached.promise = null; // Reset cache on failure so future requests can retry
    throw e;
  }
  return cached.conn;
}

export default async function handler(req, res) {
  // 1. Establish database connection with tight timeouts
  try {
    await connectDB();
  } catch (dbError) {
    console.error("Database connection failed:", dbError.message);
    return res
      .status(500)
      .json({ error: "Database connection failed", details: dbError.message });
  }

  // 2. Process Request
  if (req.method === "POST") {
    try {
      const message = new Message(req.body);
      await message.save();
      return res.status(201).json({ success: true, message: "Message saved!" });
    } catch (err) {
      console.error("Save error:", err.message);
      return res
        .status(500)
        .json({ error: "Failed to save message", details: err.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
