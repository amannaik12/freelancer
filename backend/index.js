import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import chatRoutes from "./routes/chatRoutes.js";

import authRoutes from "./routes/authRoutes.js";
import freelancerRoutes from "./routes/freelancerRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import businessRoutes from "./routes/businessRoutes.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/freelancers", freelancerRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/business", businessRoutes);
app.use("/chat", chatRoutes);

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (messageData) => {
    io.emit("receiveMessage", messageData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((error) => console.log("❌ MongoDB Connection Error:", error));