// Import dependencies
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import infoData from "./data/infoData.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

// Info endpoint (HPIC Data)
app.get("/api/info", (req, res) => res.json(infoData));

// Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
