import api from "./api";
import type { TestCase } from "../types/testCase";

export const getTestCases = async (): Promise<TestCase[]> => {
  const response = await api.get("/testcases");
  return response.data;
};

export const createTestCase = async (
  testCase: TestCase
) => {
  const response = await api.post("/testcases", testCase);
  return response.data;
};

export const updateTestCase = async (
  id: string,
  testCase: TestCase
) => {
  const response = await api.put(
    `/testcases/${id}`,
    testCase
  );

  return response.data;
};

export const deleteTestCase = async (id: string) => {
  const response = await api.delete(`/testcases/${id}`);
  return response.data;
};