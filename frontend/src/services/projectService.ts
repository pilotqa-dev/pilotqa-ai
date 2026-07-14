import api from "./api";
import type {
  Project,
  CreateProjectRequest,
  UpdateProjectRequest,
} from "../types/project";

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects");
  return response.data;
};

export const createProject = async (
  project: CreateProjectRequest
): Promise<Project> => {
  const response = await api.post("/projects", project);
  return response.data;
};

export const updateProject = async (
  id: string,
  project: UpdateProjectRequest
): Promise<Project> => {
  const response = await api.put(`/projects/${id}`, project);
  return response.data;
};

export const deleteProject = async (
  id: string
): Promise<void> => {
  await api.delete(`/projects/${id}`);
};