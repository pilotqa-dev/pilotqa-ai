import { Router } from "express";
import {
  createTestCaseController,
  getTestCasesController,
  updateTestCaseController,
  deleteTestCaseController,
} from "./controller";

const router = Router();

router.post("/", createTestCaseController);
router.get("/", getTestCasesController);
router.put("/:id", updateTestCaseController);
router.delete("/:id", deleteTestCaseController);

export default router;