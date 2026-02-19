type IUser = {
  name: String
  email: String
  password: String
}

export { IUser }

import { User, Session } from "better-auth"

declare global {
  namespace Express {
    interface Request {
      user?: User // Better Auth এর User টাইপ
      session?: Session // Better Auth এর Session টাইপ
    }
  }
}
