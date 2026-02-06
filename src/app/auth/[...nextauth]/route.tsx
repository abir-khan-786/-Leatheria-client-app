import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// authOptions কে আলাদা কনস্ট্যান্ট হিসেবে রাখুন এবং export করুন
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
    
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ডাটাবেজ চেক লজিক এখানে
        const user = { id: "1", name: "Rakib", email: "rakib@leatheria.com" }
        if (user) return user
        return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
