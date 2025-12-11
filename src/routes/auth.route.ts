import { Router } from "express"
import { register, login } from "../controllers/auth.controller"

const authRoter = Router()


authRoter.post("/register", register)
authRoter.post("/login", login)


export default authRoter