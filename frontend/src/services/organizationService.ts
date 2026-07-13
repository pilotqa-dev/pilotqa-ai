import api from "./api";

export const getOrganizations = async () => {
  const response = await api.get("/organizations");
  return response.data;
};

export const createOrganization = async (organization: any) => {
  const response = await api.post(
    "/organizations",
    organization
  );

  return response.data;
};