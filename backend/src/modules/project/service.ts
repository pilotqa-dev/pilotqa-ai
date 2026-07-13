import { PrismaClient } from "@prisma/client";
import { CreateProjectRequest } from "./types";

const prisma = new PrismaClient();

export const createProject = async (data: CreateProjectRequest) => {
  const project = await prisma.project.create({
    data: {
      name: data.name,
      projectKey: data.projectKey,
      description: data.description,
      organizationId: data.organizationId,
    },
  });

  return project;
};