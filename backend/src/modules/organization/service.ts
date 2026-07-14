import { prisma } from "../../shared/database/prisma";
import { CreateOrganizationRequest } from "./types";

export const createOrganization = async (
  data: CreateOrganizationRequest
) => {
  return prisma.organization.create({
    data: {
      name: data.name,
      code: data.code,
      description: data.description,
    },
  });
};

export const getOrganizations = async () => {
  return prisma.organization.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
export const updateOrganization = async (
  id: string,
  data: any
) => {
  const organization = await prisma.organization.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      code: data.code,
      description: data.description,
    },
  });

  return organization;
};