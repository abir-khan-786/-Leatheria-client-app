import "dotenv/config"
import pg from "pg"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"

const connectionString = `${process.env.DATABASE_URL}`

// ১. পুল এবং অ্যাডাপ্টার তৈরি করুন
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)

const globalForPrisma = global as unknown as { prisma: PrismaClient }

// ২. PrismaClient-এর ভেতরে অ্যাডাপ্টারটি পাস করুন
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: adapter, // এই লাইনটি মিসিং ছিল
    log: ["query"],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
