import { Request, Response } from "express";
import {
  createDefect,
  getDefects,
  updateDefect,
  deleteDefect,
} from "./service";
import { validateCreateDefect } from "./validation";

export const createDefectController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateDefect(req.body);

    const defect = await createDefect(req.body);

    res.status(201).json(defect);
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};
export const getDefectsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const defects = await getDefects();
    res.json(defects);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const updateDefectController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateDefect(req.body);

    const defect = await updateDefect(
      req.params.id as string,
      req.body
    );

    res.json(defect);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const deleteDefectController = async (
  req: Request,
  res: Response
) => {
  try {
    await deleteDefect(req.params.id as string);

    res.json({
      message: "Defect deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};