import { CreateTestExecutionRequest } from "./types";

export const validateCreateTestExecution = (
  data: CreateTestExecutionRequest
) => {
  if (!data.executionId) {
    throw new Error("Execution ID is required.");
  }

  if (!data.title) {
    throw new Error("Title is required.");
  }

  if (!data.testCaseId) {
    throw new Error("Test Case is required.");
  }
};