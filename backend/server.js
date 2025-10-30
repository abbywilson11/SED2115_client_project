import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import resourcesRoutes from "./routes/resourcesRoutes.js"; // NEW IMPORT

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Register the new resources API endpoint
app.use("/api/resources", resourcesRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));