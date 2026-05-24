import mongoose from "mongoose";
import Message from "../backend/models/Message.js";

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

  if (req.method === "POST") {
    try {
      const message = new Message(req.body);
      await message.save();
      res.status(201).json({ success: true, message: "Message saved!" });
    } catch (err) {
      res.status(500).json({ error: "Failed to save message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
