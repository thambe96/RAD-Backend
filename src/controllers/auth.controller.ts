import { Request, response, Response } from "express"
import { ApprovalStatus, Role, User } from "../models/User"
import { imageUploader } from "../utils/upload.image"
import cloudinary from "../config/cloudinary"


export const register = async (req: Request, res: Response) => {

    try {
        const {firstname, lastname, email, password} = req.body
        const roles = Role.USER
        const status = ApprovalStatus.DEFAULT
        let imageURL = await imageUploader(req.file?.buffer)
        

        //Add validations to all the fields
        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({message: 'All fields are needed'})
        }

        if (!nameRegex.test(firstname)) return res.status(400).json({message: 'Invalid firstname'})
        if (!nameRegex.test(lastname)) return res.status(400).json({message: 'Invalid lastname'})
        if (!emailRegex.test(email) ) return res.status(400).json({message: 'Invalid email'})
        if (!passwordRegex.test(password)) return res.status(400).json({message: 'Invalid password'})

        const userRoles: Role[] = [Role.ADMIN, Role.USER, Role.CONTRIBUTOR]
        const isValidRole = userRoles.some((role) => roles === role) // true
        if (!isValidRole) return res.status(400).json({message: 'Invalid user role'})
        const approvals: ApprovalStatus[] = [ApprovalStatus.APPROVED, ApprovalStatus.DEFAULT, ApprovalStatus.PENDING, ApprovalStatus.REJECT]
        const isValidStatus = approvals.some((approval) => status === approval)
        if (!isValidStatus) return res.status(400).json({message: 'Invalid approval status'})
        
        // hash the password using bcrypt 

        //make sure you schema fields exactly matche with the fields you provide here, otherwise defaults will be applied for those fields
        const newUser = new User({
            firstname,
            lastname,
            email,
            password,
            roles,
            imageURL,
            status

        })

        await newUser.save()
        res.status(201).json({
            message: "successfully registered the user", 
            data: newUser
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Faild to create the user',
            data: error

        })
    }
 
}









export const login = (req: Request, res: Response) => {

    res.status(201).json({message: "successfully logged in!"})

}





export const handleRefreshToken = () => {

}


export const updateProfilePicture = () => {
    // first chekc if there is a link available in the db
    // if available delete it and -> just update 
    // if not upload and save the resulting link

}

export const updateApprovalStatus = () => {
    // only admin can access this endpoint
    // give the approval based on the the role
}


export const getUserDetails = (req: Request, res: Response) => {
    console.log("hi this get user")
    
    res.status(201).json({message: "successfully logged in and get user details!"})
}