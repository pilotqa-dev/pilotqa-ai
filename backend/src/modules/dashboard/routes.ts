import { Router } from "express";
import { getDashboardStatsController } from "./controller";

const router = Router();

router.get("/stats", getDashboardStatsController);

export default router;