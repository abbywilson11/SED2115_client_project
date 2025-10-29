import express from "express";
// import resources from "../data/resourcesData.js"; // REMOVE THIS LINE

const router = express.Router();

// Example endpoint without data
router.get("/", (req, res) => {
  res.json({ message: "No resource data yet" });
});

export default router;
