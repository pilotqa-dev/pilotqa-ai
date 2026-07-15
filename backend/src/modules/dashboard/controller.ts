import { Request, Response } from "express";
import { getDashboardStats } from "./service";

export const getDashboardStatsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const stats = await getDashboardStats();

    res.json(stats);
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Internal Server Error",
    });
  }
};