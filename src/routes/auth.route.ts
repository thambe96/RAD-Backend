import { Router } from "express"
import { register, login, getUserDetails } from "../controllers/auth.controller"
import { upload } from "../middleware/upload"

const authRoter = Router()


authRoter.post("/register", upload.single("userimage"),register)
authRoter.post("/login", login)
authRoter.get("/getUser", getUserDetails)


export default authRoter