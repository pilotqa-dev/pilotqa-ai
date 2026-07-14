import { Router } from "express";
import {
  createProjectController,
  getProjectsController,
  updateProjectController,
  deleteProjectController,
} from "./controller";

const router = Router();

router.post("/", createProjectController);
router.get("/", getProjectsController);
router.put("/:id", updateProjectController);
router.delete("/:id", deleteProjectController);

export default router;