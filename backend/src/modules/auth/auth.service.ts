import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "../../lib/prisma";
import {
  LoginRequest,
  LoginResponse,
  AuthUser,
} from "./auth.types";

const JWT_SECRET =
  process.env.JWT_SECRET || "pilotqa-ai-secret";

export class AuthService {
  static async login(
    request: LoginRequest
  ): Promise<LoginResponse> {
    const user = await prisma.user.findUnique({
      where: {
        email: request.email,
      },
    });

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    if (!user.isActive) {
      return {
        success: false,
        message: "User account is inactive",
      };
    }

    const passwordMatched = await bcrypt.compare(
      request.password,
      user.password
    );

    if (!passwordMatched) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastLogin: new Date(),
      },
    });

    const authUser: AuthUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      organizationId: user.organizationId,
    };

    const accessToken = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
        organizationId: user.organizationId,
      },
      JWT_SECRET,
      {
        expiresIn: "8h",
      }
    );

    return {
      success: true,
      message: "Login successful",
      accessToken,
      user: authUser,
    };
  }
}