import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "../../lib/prisma";
import type {
  LoginRequest,
  LoginResponse,
  AuthUser,
} from "./auth.types";

const JWT_SECRET =
  process.env.JWT_SECRET || "pilotqaai-secret";

export class AuthService {
  static async login(
    request: LoginRequest
  ): Promise<LoginResponse> {
    const user = await prisma.user.findFirst({
      where: {
        email: request.email,
      },
      include: {
        credential: true,
        role: true,
      },
    });

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    if (!user.credential) {
      return {
        success: false,
        message: "User credential not found",
      };
    }

    if (!user.isActive) {
      return {
        success: false,
        message: "User account is inactive",
      };
    }

    if (user.credential.accountLocked) {
      return {
        success: false,
        message: "Account is locked",
      };
    }

    const matched = await bcrypt.compare(
      request.password,
      user.credential.passwordHash
    );

    if (!matched) {
      await prisma.credential.update({
        where: {
          id: user.credential.id,
        },
        data: {
          failedLoginAttempts: {
            increment: 1,
          },
        },
      });

      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    await prisma.credential.update({
      where: {
        id: user.credential.id,
      },
      data: {
        failedLoginAttempts: 0,
        lastLogin: new Date(),
      },
    });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastLogin: new Date(),
      },
    });

    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "LOGIN",
        entity: "USER",
        entityId: user.id,
        description: "User logged in successfully",
      },
    });

    const authUser: AuthUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role.name,
      organizationId: user.organizationId,
    };

    const accessToken = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role.name,
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