export interface CreateTestCaseRequest {
  testCaseId: string;
  title: string;
  description?: string;
  priority?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  requirementId: string;
}