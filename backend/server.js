import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import projectRoutes, { seedIfEmpty } from "./routes/projects.js";
import contactRoutes from "./routes/contact.js";

// Load ENV variables
dotenv.config();

// Connect to MongoDB
connectDB().then(() => {
  // Auto-seed project table if empty
  seedIfEmpty();
});

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Root Endpoint for sanity checks
app.get("/", (req, res) => {
  res.send("API Server is running successfully.");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});
