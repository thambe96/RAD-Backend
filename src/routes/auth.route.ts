import { Router } from "express"
import { register, login, getUserDetails, updateApprovalStatus } from "../controllers/auth.controller"
import { upload } from "../middleware/upload"
import { authenticate } from "../middleware/auth"
import { checkRole } from "../middleware/inspect"
import { Role } from "../models/User"

const authRoter = Router()


authRoter.post("/register", upload.single("userimage"),register)
authRoter.post("/login", login)
authRoter.get("/getUser", authenticate, getUserDetails)
authRoter.post("/updateApproval", authenticate, checkRole(Role.ADMIN), updateApprovalStatus)


export default authRoter