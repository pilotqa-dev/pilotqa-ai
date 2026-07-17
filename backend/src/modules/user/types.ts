export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  role: string;
  isActive: boolean;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  password: string;
  role: string;
  organizationId: string;
}

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  role?: string;
  isActive?: boolean;
}