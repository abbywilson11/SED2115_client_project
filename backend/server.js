import express from "express";
import cors from "cors";
import resourcesRoutes from "./resourcesRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => res.send("Backend is running"));

// API route
app.use("/api/resources", resourcesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
