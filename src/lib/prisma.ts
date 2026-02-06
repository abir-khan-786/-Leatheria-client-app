import "dotenv/config"
import pg from "pg"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"

const connectionString = process.env.DATABASE_URL

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
  pgPool: pg.Pool
}

// ১. পুল তৈরি করুন (একবারই তৈরি হবে)
const pool = globalForPrisma.pgPool || new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)

// ২. PrismaClient ইনিশিয়ালাইজ করুন
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: adapter,
    log: ["error"], // প্রোডাকশনে শুধু এরর লগ দেখুন
  })

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
  globalForPrisma.pgPool = pool
}
