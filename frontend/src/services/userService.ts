export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  role: string;
  isActive: boolean;
  organizationId: string;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
  organizationId: string;
}

const API_URL = "http://localhost:5001/api/users";

export const userService = {
  async getUsers(): Promise<User[]> {
    const token = localStorage.getItem("token");

    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to load users");
    }

    const result = await response.json();

    return result.data;
  },

  async createUser(request: CreateUserRequest): Promise<User> {
    const token = localStorage.getItem("token");

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(request),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result.data;
  },
};