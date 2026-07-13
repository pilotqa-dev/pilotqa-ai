import { Request, Response } from "express";
import { createProject } from "./service";
import { validateCreateProject } from "./validation";

export const createProjectController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateProject(req.body);

    const project = await createProject(req.body);

    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};