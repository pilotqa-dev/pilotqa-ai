import type { TestExecution } from "./testExecution";

export interface Defect {
  id: string;
  defectId: string;
  title: string;
  description?: string;
  environment?: string;

  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  severity: "MINOR" | "MAJOR" | "CRITICAL" | "BLOCKER";
  status:
    | "OPEN"
    | "IN_PROGRESS"
    | "RESOLVED"
    | "CLOSED"
    | "REOPENED";

  executionId: string;
  execution?: TestExecution;
}

export interface CreateDefectRequest {
  defectId: string;
  title: string;
  description?: string;
  environment?: string;

  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  severity: "MINOR" | "MAJOR" | "CRITICAL" | "BLOCKER";
  status:
    | "OPEN"
    | "IN_PROGRESS"
    | "RESOLVED"
    | "CLOSED"
    | "REOPENED";

  executionId: string;
}