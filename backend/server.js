import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import resourcesRoutes from "./resourcesRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Register API endpoint
app.use("/api/resources", resourcesRoutes);

// Use environment port if available, otherwise fallback to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (!process.env.PORT) {
    console.log("Running locally at http://localhost:5000");
  }
});
