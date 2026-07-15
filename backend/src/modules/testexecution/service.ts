import { PrismaClient } from "@prisma/client";
import { CreateTestExecutionRequest } from "./types";

const prisma = new PrismaClient();

export const createTestExecution = async (
  data: CreateTestExecutionRequest
) => {
  return prisma.testExecution.create({
    data: {
      executionId: data.executionId,
      title: data.title,
      comments: data.comments,
      status: data.status,
      priority: data.priority,
      testCaseId: data.testCaseId,
    },
  });
};

export const getTestExecutions = async () => {
  return prisma.testExecution.findMany({
    include: {
      testCase: true,
    },
  });
};

export const updateTestExecution = async (
  id: string,
  data: CreateTestExecutionRequest
) => {
  return prisma.testExecution.update({
    where: { id },
    data: {
      executionId: data.executionId,
      title: data.title,
      comments: data.comments,
      status: data.status,
      priority: data.priority,
      testCaseId: data.testCaseId,
    },
  });
};

export const deleteTestExecution = async (id: string) => {
  return prisma.testExecution.delete({
    where: { id },
  });
};