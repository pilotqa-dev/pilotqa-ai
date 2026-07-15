import { Request, Response } from "express";
import {
  createTestCase,
  getTestCases,
  updateTestCase,
  deleteTestCase,
} from "./service";
import { validateCreateTestCase } from "./validation";

export const createTestCaseController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateTestCase(req.body);

    const testCase = await createTestCase(req.body);

    res.status(201).json(testCase);
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const getTestCasesController = async (
  _req: Request,
  res: Response
) => {
  try {
    const testCases = await getTestCases();
    res.json(testCases);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const updateTestCaseController = async (
  req: Request,
  res: Response
) => {
  try {
    validateCreateTestCase(req.body);

    const testCase = await updateTestCase(
      req.params.id as string,
      req.body
    );

    res.json(testCase);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const deleteTestCaseController = async (
  req: Request,
  res: Response
) => {
  try {
    await deleteTestCase(req.params.id as string);

    res.json({
      message: "Test Case deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};