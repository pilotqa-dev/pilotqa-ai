import type { Requirement } from "./requirement";

export interface TestCase {
  id: string;
  testCaseId: string;
  title: string;
  description?: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  requirementId: string;
  requirement?: Requirement;
}

export interface CreateTestCaseRequest {
  testCaseId: string;
  title: string;
  description?: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  requirementId: string;
}