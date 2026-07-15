import type { Project } from "./project";

export interface Requirement {
  id: string;
  requirementId: string;
  title: string;
  description?: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  projectId: string;
  project?: Project;
}

export interface CreateRequirementRequest {
  requirementId: string;
  title: string;
  description?: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  projectId: string;
}