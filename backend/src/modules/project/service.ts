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

export const getProjects = async () => {
  const projects = await prisma.project.findMany({
    include: {
      organization: true,
    },
  });

  return projects;
};

export const updateProject = async (
  id: string,
  data: CreateProjectRequest
) => {
  const project = await prisma.project.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      projectKey: data.projectKey,
      description: data.description,
      organizationId: data.organizationId,
    },
  });

  return project;
};

export const deleteProject = async (id: string) => {
  await prisma.project.delete({
    where: {
      id,
    },
  });

  return;
};