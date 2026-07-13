import { Router } from "express";
import { createProjectController } from "./controller";

const router = Router();

router.post("/", createProjectController);

export default router;