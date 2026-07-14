import api from "./api";
import type { Organization } from "../types/organization";

export const getOrganizations = async (): Promise<Organization[]> => {
  const response = await api.get("/organizations");
  return response.data;
};

export const createOrganization = async (
  organization: Organization
): Promise<Organization> => {
  const response = await api.post("/organizations", organization);
  return response.data;
};

export const updateOrganization = async (
  id: string,
  organization: Organization
): Promise<Organization> => {
  const response = await api.put(
    `/organizations/${id}`,
    organization
  );

  return response.data;
};

export const deleteOrganization = async (
  id: string
): Promise<void> => {
  await api.delete(`/organizations/${id}`);
};