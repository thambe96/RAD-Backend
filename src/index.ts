import express from "express"
import { Request, Response } from "express"
import testRoute from "./routes/test.route"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { error } from "console"
import authRoter from "./routes/auth.route"
import movieReviewPostRouter from "./routes/movieReviewPost.route"
import wishListRouter from "./routes/wishlist.route"
import commentRouer from "./routes/comment.route"
import { donationRouter } from "./routes/donation.route"



dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT
const MONGO_URL = process.env.MONGO_URL as string
const app = express()
app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173", // your frontend
  credentials: true
}))

// app.get("/testApi", (req: Request, res: Response) => {
//     return res.status(200).json({message: "Test API Working fine!"})
// })

app.use("/api/v1/test", testRoute)

// app.get("/testIndexGet", (req: Request, res: Response) => {
//     return res.status(200).json({message: "This is alright"})
// })


// console.log(MONGO_URL)


app.use("/api/v1/auth", authRoter)

app.use("/api/v1/movieReviewPost", movieReviewPostRouter)

app.use("/api/v1/wishLIst", wishListRouter)
app.use("/api/v1/comments", commentRouer)
app.use("/api/v1/donation", donationRouter)





mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("DB connected")
    })
    .catch((error) => {
        console.error(`DB connection fail: ${error}`)
        process.exit(1)
    })


app.listen(SERVER_PORT, () => {
    console.log.apply(`Server is up and running on port: ${SERVER_PORT}`)
})