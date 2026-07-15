import { PrismaClient } from "@prisma/client";
import { CreateTestCaseRequest } from "./types";

const prisma = new PrismaClient();

export const createTestCase = async (
  data: CreateTestCaseRequest
) => {
  return prisma.testCase.create({
    data: {
      testCaseId: data.testCaseId,
      title: data.title,
      description: data.description,
      priority: data.priority,
      requirementId: data.requirementId,
    },
  });
};

export const getTestCases = async () => {
  return prisma.testCase.findMany({
    include: {
      requirement: true,
    },
  });
};

export const updateTestCase = async (
  id: string,
  data: CreateTestCaseRequest
) => {
  return prisma.testCase.update({
    where: { id },
    data: {
      testCaseId: data.testCaseId,
      title: data.title,
      description: data.description,
      priority: data.priority,
      requirementId: data.requirementId,
    },
  });
};

export const deleteTestCase = async (id: string) => {
  return prisma.testCase.delete({
    where: { id },
  });
};