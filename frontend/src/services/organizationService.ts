import api from "./api";

export interface Organization {
  id?: string;
  name: string;
  code: string;
  description?: string;
}

export const getOrganizations = async () => {
  const response = await api.get("/organizations");
  return response.data;
};

export const createOrganization = async (
  organization: Organization
) => {
  const response = await api.post(
    "/organizations",
    organization
  );

  return response.data;
};