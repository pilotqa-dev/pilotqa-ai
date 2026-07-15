import express from "express";
import cors from "cors";
import projectRoutes from "./modules/project/routes";
import organizationRoutes from "./modules/organization/routes";
import requirementRoutes from "./modules/requirement/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/organizations", organizationRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/requirements", requirementRoutes);

app.get("/", (_req, res) => {
  res.json({
    application: "PilotQA AI",
    version: "1.0.0",
    status: "Backend Running 🚀",
  });
});

app.use("/api/projects", projectRoutes);
app.use("/api/requirements", requirementRoutes);

export default app;