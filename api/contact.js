import { connectDB } from "../backend/config/db.js";
import Message from "../backend/models/Message.js";

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

  // 2. Process Request
  if (req.method === "POST") {
    try {
      const { name, email, subject, message } = req.body;

      // Simple validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "Please fill in all fields" });
      }

      const newMessage = new Message({
        name,
        email,
        subject,
        message,
      });

      const savedMessage = await newMessage.save();
      console.log(`New contact message received from ${name} (${email}) in serverless function`);

      return res.status(201).json({
        success: true,
        message: "Message received! Thank you for reaching out.",
        data: savedMessage,
      });
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
