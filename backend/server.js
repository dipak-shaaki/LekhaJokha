import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import connectDB from "./config/db.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "LekhaJokha backend is live!" });
});

// Connect to DB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err.message));
