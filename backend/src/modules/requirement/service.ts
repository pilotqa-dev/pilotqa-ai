import { PrismaClient } from "@prisma/client";
import { CreateRequirementRequest } from "./types";

const prisma = new PrismaClient();

export const createRequirement = async (
  data: CreateRequirementRequest
) => {
  return prisma.requirement.create({
    data: {
      requirementId: data.requirementId,
      title: data.title,
      description: data.description,
      priority: data.priority,
      projectId: data.projectId,
    },
  });
};
export const getRequirements = async () => {
  return prisma.requirement.findMany({
    include: {
      project: true,
    },
  });
};

export const updateRequirement = async (
  id: string,
  data: CreateRequirementRequest
) => {
  return prisma.requirement.update({
    where: { id },
    data: {
      requirementId: data.requirementId,
      title: data.title,
      description: data.description,
      priority: data.priority,
      projectId: data.projectId,
    },
  });
};

export const deleteRequirement = async (id: string) => {
  return prisma.requirement.delete({
    where: { id },
  });
};