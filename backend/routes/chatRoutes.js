import express from "express";
import Chat from "../models/chat.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Get Chat Messages Between Two Users
router.get("/:user1/:user2", verifyToken, async (req, res) => {
  try {
    const { user1, user2 } = req.params;
    const messages = await Chat.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 },
      ],
    }).sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Send a Message
router.post("/", verifyToken, async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;
    const newMessage = new Chat({ sender, receiver, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
