import { connectDB } from "../backend/config/db.js";
import Project from "../backend/models/Project.js";
import { SEED_PROJECTS } from "../backend/config/seedData.js";

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
      let projects = await Project.find({}).sort({ createdAt: -1 });
      
      // Auto-seed if the database is blank
      if (projects.length === 0) {
        console.log("Database is empty. Seeding default projects in serverless function...");
        await Project.insertMany(SEED_PROJECTS);
        projects = await Project.find({}).sort({ createdAt: -1 });
      }

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
