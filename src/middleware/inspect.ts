import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "./auth"
import { Role } from "../models/User";


export const checkRole = (requireRole: Role) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        const payload = req.userDetails
        if (!payload) {
            return res.status(401).json({message: 'no token is provided!'})
        }
        try {
            const userRoles: Role[] = payload.roles
            if (!userRoles) {
                return res.status(401).json({message: "user roles are provided!"})
            }

            const result = userRoles.some((userRole) => { userRole === requireRole})

            if (!result) {
                return res.status(401).json({message: "no clearance for this endpoint!"})
            }

            next()

        } catch (error: any) {
            res.status(501).json({
                message: "internal server error",
                errorMsg: error.message
            })
        }


    }

}