import bcrypt from "bcrypt";

import { prisma } from "../../lib/prisma";

import {
  UserResponse,
  CreateUserRequest,
  UpdateUserRequest,
} from "./types";

export class UserService {
  static async getAllUsers(): Promise<UserResponse[]> {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return users.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      isActive: user.isActive,
      organizationId: user.organizationId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
  }

  static async createUser(
    request: CreateUserRequest
  ): Promise<UserResponse> {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: request.email,
      },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(
      request.password,
      10
    );

    const user = await prisma.user.create({
      data: {
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email,
        phoneNumber: request.phoneNumber,
        password: hashedPassword,
        role: request.role as any,
        organizationId: request.organizationId,
        isActive: true,
      },
    });

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      isActive: user.isActive,
      organizationId: user.organizationId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static async updateUser(
    id: string,
    request: UpdateUserRequest
  ): Promise<UserResponse> {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        firstName: request.firstName,
        lastName: request.lastName,
        phoneNumber: request.phoneNumber,
        role: request.role as any,
        isActive: request.isActive,
      },
    });

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      isActive: user.isActive,
      organizationId: user.organizationId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}