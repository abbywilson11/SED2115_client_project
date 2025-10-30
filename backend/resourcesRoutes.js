import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "Example", link: "/brochures/example.pdf" }
  ]);
});

export default router;
