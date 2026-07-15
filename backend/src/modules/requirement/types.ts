export interface CreateRequirementRequest {
  requirementId: string;
  title: string;
  description?: string;
  priority?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  projectId: string;
}