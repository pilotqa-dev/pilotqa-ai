export const validateCreateProject = (data: any) => {
  if (!data.name) {
    throw new Error("Project name is required");
  }

  if (!data.projectKey) {
    throw new Error("Project key is required");
  }

  if (!data.organizationId) {
    throw new Error("Organization ID is required");
  }
};