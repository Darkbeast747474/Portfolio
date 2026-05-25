import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

// Prevent Mongoose from buffering queries endlessly if the connection drops
const options = {
  bufferCommands: false,
  serverSelectionTimeoutMS: 5000, // Keeps Vercel from hanging for 10 seconds
  family: 4, // 🟢 CRITICAL: Forces Node 24 to resolve via IPv4 instead of IPv6
  retryWrites: true,
  w: "majority",
};

// Use a global variable to preserve the connection across serverless warm-starts
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  // 1. If we already have an active connection, reuse it immediately
  if (cached.conn) {
    return cached.conn;
  }

  // 2. If we don't have a connection promise yet, create one
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, options)
      .then((mongooseInstance) => {
        console.log(`MongoDB Connected: ${mongooseInstance.connection.host}`);
        return mongooseInstance;
      });
  }

  try {
    // 3. Wait for the connection promise to resolve
    cached.conn = await cached.promise;
  } catch (error) {
    // 4. Reset the cache on failure so the next request can try fresh
    cached.promise = null;
    console.error(`MongoDB Connection Error: ${error.message}`);
    // DO NOT use process.exit(1) here; throw the error so Vercel can handle it gracefully
    throw error;
  }

  return cached.conn;
};
