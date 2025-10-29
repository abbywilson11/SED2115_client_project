import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Example API route
app.get("/api/resources", (req, res) => {
  res.json({ message: "No resource data yet" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
