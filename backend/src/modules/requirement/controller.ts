import { Request, Response } from "express";
import { validateCreateRequirement } from "./validation";
import {
  createRequirement,
  getRequirements,
  updateRequirement,
  deleteRequirement,
} from "./service";

export const createRequirementController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateRequirement(req.body);

    const requirement = await createRequirement(req.body);

    res.status(201).json(requirement);
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};
export const getRequirementsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const requirements = await getRequirements();
    res.json(requirements);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const updateRequirementController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateRequirement(req.body);

    const requirement = await updateRequirement(
      req.params.id as string,
      req.body
    );

    res.json(requirement);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const deleteRequirementController = async (
  req: Request,
  res: Response
) => {
  try {
    await deleteRequirement(req.params.id as string);
    res.json({ message: "Requirement deleted successfully." });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};