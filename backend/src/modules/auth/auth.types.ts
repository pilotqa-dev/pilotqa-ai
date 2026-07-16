export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  organizationId: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  accessToken?: string;
  user?: AuthUser;
}