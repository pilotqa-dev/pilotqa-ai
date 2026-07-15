import api from "./api";
import type { Defect } from "../types/defect";

export const getDefects = async (): Promise<Defect[]> => {
  const response = await api.get("/defects");
  return response.data;
};

export const createDefect = async (
  defect: Defect
) => {
  const response = await api.post(
    "/defects",
    defect
  );

  return response.data;
};

export const updateDefect = async (
  id: string,
  defect: Defect
) => {
  const response = await api.put(
    `/defects/${id}`,
    defect
  );

  return response.data;
};

export const deleteDefect = async (
  id: string
) => {
  const response = await api.delete(
    `/defects/${id}`
  );

  return response.data;
};