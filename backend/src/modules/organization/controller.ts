import { Request, Response } from "express";
import {
  createOrganization,
  getOrganizations,
} from "./service";
import { validateCreateOrganization } from "./validation";

export const createOrganizationController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateOrganization(req.body);

    const organization = await createOrganization(req.body);

    res.status(201).json(organization);
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
export const getOrganizationsController = async (
  req: Request,
  res: Response
) => {
  try {
    const organizations = await getOrganizations();

    res.json(organizations);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch organizations",
    });
  }
};