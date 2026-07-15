export interface CreateDefectRequest {
  defectId: string;
  title: string;
  description?: string;
  environment?: string;

  priority?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

  severity?: "MINOR" | "MAJOR" | "CRITICAL" | "BLOCKER";

  status?:
    | "OPEN"
    | "IN_PROGRESS"
    | "RESOLVED"
    | "CLOSED"
    | "REOPENED";

  executionId: string;
}