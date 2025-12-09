import express from "express"
import { Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT
const app = express()
app.use(express.json())

app.get("/testApi", (req: Request, res: Response) => {
    return res.status(200).json({message: "Test API Working fine!"})
})





app.listen(SERVER_PORT, () => {
    console.log.apply(`Server is up and running on port: ${SERVER_PORT}`)
})