import { CreateTestCaseRequest } from "./types";

export const validateCreateTestCase = (
  data: CreateTestCaseRequest
) => {
  if (!data.testCaseId) {
    throw new Error("Test Case ID is required.");
  }

  if (!data.title) {
    throw new Error("Title is required.");
  }

  if (!data.requirementId) {
    throw new Error("Requirement is required.");
  }
};