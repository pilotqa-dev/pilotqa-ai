import { z } from "zod";

export const createUserSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required"),
  lastName: z.string().trim().min(2, "Last name is required"),
  email: z.string().trim().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum([
    "SUPER_ADMIN",
    "PROJECT_ADMIN",
    "QA_LEAD",
    "TESTER",
    "VIEWER",
  ]),
  organizationId: z.string().uuid("Invalid organization"),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;