import api from "./api";

export interface DashboardStats {
  projects: number;
  requirements: number;
  testCases: number;
  executions: number;
  passed: number;
  failed: number;
  openDefects: number;
}

export const getDashboardStats = async (): Promise<DashboardStats> => {
  const response = await api.get("/dashboard/stats");
  return response.data;
};