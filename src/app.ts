import express from "express"
import "dotenv/config"
import cors from "cors"
import { userRoute } from "./modules/user/user.route.js"
import { authRoute } from "./modules/auth/auth.route.js"

const app = express()
// ১. সবার আগে CORS কনফিগারেশন থাকতে হবে (শুধু একবার)
app.use(
  cors({
    origin: "http://localhost:3000", // আপনার ফ্রন্টএন্ড ইউআরএল
    credentials: true, // Better Auth এর কুকির জন্য এটি মাস্ট
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  }),
)

// ২. এরপর বাকি মিডলওয়্যার
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Leatheria API is running")
})

// ৩. রাউটস
app.use("/api/v1/user", userRoute)
app.use("/api/v1/auth", authRoute)

export default app
