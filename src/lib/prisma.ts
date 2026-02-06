import "dotenv/config"
import pkg from "pg" // ডিফল্ট ইম্পোর্ট হিসেবে pkg নিন
const { Pool } = pkg // সেখান থেকে Pool বের করে আনুন
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"

const connectionString = process.env.DATABASE_URL

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
  pgPool: pkg.Pool
}

// একবারই পুল তৈরি হবে
const pool = globalForPrisma.pgPool || new Pool({ connectionString })
const adapter = new PrismaPg(pool)

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: adapter,
    log: ["error"],
  })

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
  globalForPrisma.pgPool = pool
}
