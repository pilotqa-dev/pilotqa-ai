import { Router } from "express";
import {
  createTestExecutionController,
  getTestExecutionsController,
  updateTestExecutionController,
  deleteTestExecutionController,
} from "./controller";

const router = Router();

router.post("/", createTestExecutionController);
router.get("/", getTestExecutionsController);
router.put("/:id", updateTestExecutionController);
router.delete("/:id", deleteTestExecutionController);

export default router;