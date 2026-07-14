import { Request, Response } from "express";
import { validateCreateProject } from "./validation";
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} from "./service";

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
export const getProjectsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const projects = await getProjects();

    res.json(projects);
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const updateProjectController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateProject(req.body);

    const project = await updateProject(
      req.params.id as string,
      req.body
    );

    res.json(project);
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};
export const deleteProjectController = async (
  req: Request,
  res: Response
) => {
  try {
    await deleteProject(req.params.id as string);

    res.json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};