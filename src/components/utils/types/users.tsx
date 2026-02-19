// src/types/user.ts

export enum UserRole {
  ADMIN = "ADMIN",
  CUSTOMER = "USER",
}

export interface IUser {
  id    :        string  
  name  :        string
  email :        string  
  emailVerified :boolean  
  role   :       UserRole     
  image    : string
  
}

// This matches your API structure: { success: true, data: [...] }
export interface GetAllUsersResponse {
  success: boolean
  data: IUser[]
  message?: string
}
