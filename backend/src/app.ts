import express from "express";
import cors from "cors";

import organizationRoutes from "./modules/organization/routes";
import projectRoutes from "./modules/project/routes";
import requirementRoutes from "./modules/requirement/routes";
import testCaseRoutes from "./modules/testcase/routes";
import testExecutionRoutes from "./modules/testexecution/routes";
import defectRoutes from "./modules/defect/routes";
import dashboardRoutes from "./modules/dashboard/routes";

import authRoutes from "./modules/auth";
import userRoutes from "./modules/user/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    application: "PilotQA AI",
    version: "1.0.0",
    status: "Backend Running 🚀",
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/organizations", organizationRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/requirements", requirementRoutes);
app.use("/api/testcases", testCaseRoutes);
app.use("/api/testexecutions", testExecutionRoutes);
app.use("/api/defects", defectRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);

export default app;