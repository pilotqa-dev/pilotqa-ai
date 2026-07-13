import { Router } from "express";
import {
  createOrganizationController,
  getOrganizationsController,
} from "./controller";

const router = Router();

router.post("/", createOrganizationController);
router.get("/", getOrganizationsController);

export default router;