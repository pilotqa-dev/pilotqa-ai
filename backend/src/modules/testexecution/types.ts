export interface CreateTestExecutionRequest {
  executionId: string;
  title: string;
  comments?: string;

  status?:
    | "NOT_STARTED"
    | "PASSED"
    | "FAILED"
    | "BLOCKED"
    | "SKIPPED";

  priority?:
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL";

  testCaseId: string;
}