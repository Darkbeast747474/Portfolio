import express from "express";
import Project from "../models/Project.js";
import { SEED_PROJECTS } from "../config/seedData.js";

const router = express.Router();

// Helper: Seed DB if empty
export const seedIfEmpty = async () => {
  try {
    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.insertMany(SEED_PROJECTS);
      console.log("Database successfully seeded with default projects.");
    }
  } catch (error) {
    console.error(`Failed to seed database: ${error.message}`);
  }
};

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Server error fetching projects",
      error: error.message,
    });
  }
});

// POST to seed manually
router.post("/seed", async (req, res) => {
  try {
    await Project.deleteMany({});
    const createdProjects = await Project.insertMany(SEED_PROJECTS);
    res.status(201).json({
      message: "Database seeded successfully",
      count: createdProjects.length,
    });
  } catch (error) {
    res.status(500).json({ message: "Seeding failed", error: error.message });
  }
});

export default router;
