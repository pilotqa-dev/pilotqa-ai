import express from "express";
import cors from "cors";
import projectRoutes from "./modules/project/routes";
import organizationRoutes from "./modules/organization/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/organizations", organizationRoutes);

app.get("/", (_req, res) => {
  res.json({
    application: "PilotQA AI",
    version: "1.0.0",
    status: "Backend Running 🚀",
  });
});

app.use("/api/projects", projectRoutes);

export default app;