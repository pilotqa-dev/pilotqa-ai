import { Router } from "express";
import {
  createDefectController,
  getDefectsController,
  updateDefectController,
  deleteDefectController,
} from "./controller";

const router = Router();

router.post("/", createDefectController);
router.get("/", getDefectsController);
router.put("/:id", updateDefectController);
router.delete("/:id", deleteDefectController);

export default router;