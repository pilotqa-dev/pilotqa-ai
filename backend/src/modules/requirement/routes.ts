import { Router } from "express";
import {
  createRequirementController,
  getRequirementsController,
  updateRequirementController,
  deleteRequirementController,
} from "./controller";

const router = Router();

router.post("/", createRequirementController);
router.get("/", getRequirementsController);
router.put("/:id", updateRequirementController);
router.delete("/:id", deleteRequirementController);

export default router;