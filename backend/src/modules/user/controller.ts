import { Request, Response } from "express";
import { UserService } from "./service";
import { createUserSchema } from "./validation";

export class UserController {
  static async getAllUsers(
    _req: Request,
    res: Response
  ): Promise<void> {
    try {
      const users = await UserService.getAllUsers();

      res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      console.error("Get Users Error:", error);

      res.status(500).json({
        success: false,
        message: "Failed to fetch users",
      });
    }
  }

  static async createUser(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const result = createUserSchema.safeParse(req.body);

      if (!result.success) {
        res.status(400).json({
          success: false,
          message: result.error.issues[0].message,
        });
        return;
      }

      const user = await UserService.createUser(result.data);

      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      console.error("Create User Error:", error);

      res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create user",
      });
    }
  }
}