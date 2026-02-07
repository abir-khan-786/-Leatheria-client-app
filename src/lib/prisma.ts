import "dotenv/config"
import pg from "pg"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client" // Import from base client

const connectionString = process.env.DATABASE_URL

// 1. Create the driver instance
const pool = new pg.Pool({ connectionString })

// 2. Setup the Prisma adapter
const adapter = new PrismaPg(pool)

// 3. Instantiate the client with the adapter
const prisma = new PrismaClient({ adapter })

export { prisma }
