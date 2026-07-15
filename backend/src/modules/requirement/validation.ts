import { CreateRequirementRequest } from "./types";

export const validateCreateRequirement = (
  data: CreateRequirementRequest
) => {
  if (!data.requirementId) {
    throw new Error("Requirement ID is required.");
  }

  if (!data.title) {
    throw new Error("Title is required.");
  }

  if (!data.projectId) {
    throw new Error("Project is required.");
  }
};