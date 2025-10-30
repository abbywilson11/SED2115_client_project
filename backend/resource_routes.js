// Express router for the resource data module
import express from "express";
import resourcesData from "../data/resourcesData.js";

const router = express.Router();

// Route to get all educational brochures
router.get("/", (req, res) => {
  res.json(resourcesData); // Send all resources as JSON
});

export default router;