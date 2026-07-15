import { Request, Response } from "express";
import {
  createTestExecution,
  getTestExecutions,
  updateTestExecution,
  deleteTestExecution,
} from "./service";
import { validateCreateTestExecution } from "./validation";

export const createTestExecutionController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateTestExecution(req.body);

    const execution = await createTestExecution(req.body);

    res.status(201).json(execution);
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const getTestExecutionsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const executions = await getTestExecutions();
    res.json(executions);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const updateTestExecutionController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateTestExecution(req.body);

    const execution = await updateTestExecution(
      req.params.id as string,
      req.body
    );

    res.json(execution);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const deleteTestExecutionController = async (
  req: Request,
  res: Response
) => {
  try {
    await deleteTestExecution(req.params.id as string);

    res.json({
      message: "Test Execution deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};