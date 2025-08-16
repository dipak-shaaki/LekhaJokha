import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express(); //creates express app instance
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON requests

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "LekhaJokha backend is live!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
