import { Request, Response } from "express"


export const register = (req: Request, res: Response) => {
    console.log("Hi this register endpoint")
    

    console.log(req.body)

    res.status(201).json({
        message: "successfully registered the user", 
       })
}




export const login = (req: Request, res: Response) => {

    res.status(201).json({message: "successfully logged in!"})

}





export const handleRefreshToken = () => {

}