import express from "express";

const router = express.Router();

// Example endpoint
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Example Resource" }]);
});

export default router;
