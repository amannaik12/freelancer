import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import freelancerRoutes from "./routes/freelancerRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import businessRoutes from "./routes/businessRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",  // Replace if frontend runs on a different port
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/freelancers", freelancerRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/business", businessRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((error) => console.log("❌ MongoDB Connection Error:", error));
