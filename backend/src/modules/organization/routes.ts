import { Router } from "express";
import {
  createOrganizationController,
  getOrganizationsController,
  updateOrganizationController,
  deleteOrganizationController,
} from "./controller";

const router = Router();

router.post("/", createOrganizationController);
router.get("/", getOrganizationsController);
router.put("/:id", updateOrganizationController);
router.delete("/:id", deleteOrganizationController);

export default router;