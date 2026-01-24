// src/types/user.ts

export enum UserRole {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export interface IUser {
  id: number // PostgreSQL uses Int/Number
  name: string
  email: string
  role: UserRole
  createdAt: string // Usually comes as an ISO string from JSON
  updatedAt: string
}

// This matches your API structure: { success: true, data: [...] }
export interface GetAllUsersResponse {
  success: boolean
  data: IUser[]
  message?: string
}
