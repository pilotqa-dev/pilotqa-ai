export const validateCreateOrganization = (data: any) => {
  if (!data.name) {
    throw new Error("Organization name is required");
  }

  if (!data.code) {
    throw new Error("Organization code is required");
  }
};