import api from "./api";
import type { TestExecution } from "../types/testExecution";

export const getTestExecutions = async (): Promise<TestExecution[]> => {
  const response = await api.get("/testexecutions");
  return response.data;
};

export const createTestExecution = async (
  execution: TestExecution
) => {
  const response = await api.post(
    "/testexecutions",
    execution
  );

  return response.data;
};

export const updateTestExecution = async (
  id: string,
  execution: TestExecution
) => {
  const response = await api.put(
    `/testexecutions/${id}`,
    execution
  );

  return response.data;
};

export const deleteTestExecution = async (
  id: string
) => {
  const response = await api.delete(
    `/testexecutions/${id}`
  );

  return response.data;
};