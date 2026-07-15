import api from "./api";
import type { Requirement } from "../types/requirement";

export const getRequirements = async (): Promise<Requirement[]> => {
  const response = await api.get("/requirements");
  return response.data;
};

export const createRequirement = async (
  requirement: Requirement
) => {
  const response = await api.post(
    "/requirements",
    requirement
  );

  return response.data;
};

export const updateRequirement = async (
  id: string,
  requirement: Requirement
) => {
  const response = await api.put(
    `/requirements/${id}`,
    requirement
  );

  return response.data;
};

export const deleteRequirement = async (
  id: string
) => {
  const response = await api.delete(
    `/requirements/${id}`
  );

  return response.data;
};