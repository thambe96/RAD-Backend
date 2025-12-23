import { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string

export interface AuthRequest extends Request {
    userDetails?: any
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({message: 'no token is provided'})
    }
    try {
        const token = authHeader.split(" ")[1]
        console.log(`This is the authHeader: ${authHeader} : authHeader.split(""): ${authHeader.split(" ")}`)
        //Berer fakjdfakjferearjlejralwj -> when you call the split() - [Berer, fakjdfakjferearjlejralwj]
        const payload = jwt.verify(token, JWT_SECRET)
        if (!payload) {
            return res.status(401).json({message: 'web token was expired or not provided!'})
        }

        req.userDetails = payload
        console.log('This is the payload!')
        console.log(payload)
        // res.status(200).json({message: 'authentication was successfull!'})
        next()
    } catch (error: any) {
        return res.status(500).json({
            message: 'Internal server Error!',
            errorMsg: error.message
        })
    }
    

}