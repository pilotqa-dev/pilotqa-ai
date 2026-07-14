import { Router } from "express";
import {
  createOrganizationController,
  getOrganizationsController,
  updateOrganizationController,
} from "./controller";

const router = Router();

router.post("/", createOrganizationController);
router.get("/", getOrganizationsController);
router.put("/:id", updateOrganizationController);

export default router;