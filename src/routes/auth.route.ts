import { Router } from "express"
import { register, login } from "../controllers/auth.controller"
import { upload } from "../middleware/upload"

const authRoter = Router()


authRoter.post("/register", upload.single("image"),register)
authRoter.post("/login", login)


export default authRoter