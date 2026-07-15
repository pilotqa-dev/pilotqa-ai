import { CreateDefectRequest } from "./types";

export const validateCreateDefect = (
  data: CreateDefectRequest
) => {
  if (!data.defectId) {
    throw new Error("Defect ID is required.");
  }

  if (!data.title) {
    throw new Error("Title is required.");
  }

  if (!data.executionId) {
    throw new Error("Execution is required.");
  }
};