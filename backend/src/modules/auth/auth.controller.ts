import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { loginSchema } from "./auth.validation";

export class AuthController {
  static async login(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const result = loginSchema.safeParse(req.body);

      if (!result.success) {
        res.status(400).json({
          success: false,
          message: result.error.issues[0].message,
        });
        return;
      }

      const response = await AuthService.login(result.data);

      if (!response.success) {
        res.status(401).json(response);
        return;
      }

      res.status(200).json(response);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}