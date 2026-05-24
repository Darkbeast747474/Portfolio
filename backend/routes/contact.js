import express from "express";
import { Message } from "../models/Message.js";

const router = express.Router();

// POST a message
router.post("/", async (req, res) => {
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
      message
    });

    const savedMessage = await newMessage.save();
    console.log(`New contact message received from ${name} (${email})`);
    
    res.status(201).json({
      success: true,
      message: "Message received! Thank you for reaching out.",
      data: savedMessage
    });
  } catch (error) {
    console.error(`Error saving message: ${error.message}`);
    res.status(500).json({ message: "Server error saving message", error: error.message });
  }
});

export default router;
