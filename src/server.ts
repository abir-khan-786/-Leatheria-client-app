import app from "./app.js"
import { prisma } from "./lib/prisma.js"

async function startServer() {
  try {
    // Attempt to establish a connection to the database
    await prisma.$connect()
    console.log("✅ Database connected successfully")

    const PORT = process.env.PORT || 3000 // Fallback port
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error("❌ Database connection failed:", error.message)
    // It's good practice to disconnect on failure
    await prisma.$disconnect()
    process.exit(1)
  }
}

startServer()
