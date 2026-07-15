import { PrismaClient } from "@prisma/client";
import { CreateDefectRequest } from "./types";

const prisma = new PrismaClient();

export const createDefect = async (
  data: CreateDefectRequest
) => {
  return prisma.defect.create({
    data: {
      defectId: data.defectId,
      title: data.title,
      description: data.description,
      environment: data.environment,
      priority: data.priority,
      severity: data.severity,
      status: data.status,
      executionId: data.executionId,
    },
  });
};
export const getDefects = async () => {
  return prisma.defect.findMany({
    include: {
      execution: true,
    },
  });
};

export const updateDefect = async (
  id: string,
  data: CreateDefectRequest
) => {
  return prisma.defect.update({
    where: { id },
    data: {
      defectId: data.defectId,
      title: data.title,
      description: data.description,
      environment: data.environment,
      priority: data.priority,
      severity: data.severity,
      status: data.status,
      executionId: data.executionId,
    },
  });
};

export const deleteDefect = async (id: string) => {
  return prisma.defect.delete({
    where: { id },
  });
};