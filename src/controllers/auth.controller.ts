import { Request, response, Response } from "express"
import { ApprovalStatus, Role, User } from "../models/User"
import { imageUploader } from "../utils/upload.image"
import cloudinary from "../config/cloudinary"


export const register = async (req: Request, res: Response) => {
    // console.log("Hi this register endpoint")
    // lastname: string
    // email: string
    // password: string
    // roles: Role[]
    // imageURL?: string
    // status?: ApprovalStatus
    

    const {firstname, lastname, email, password} = req.body
  
    //validate data here
    

    // const userRole = Role.USER ? req.body.role !== Role.CONTRIBUTOR && req.body.role !== Role.ADMIN : Role.CONTRIBUTOR
    const roles = Role.ADMIN


    // const userStatus = ApprovalStatus.APPROVED ? req.body.status !== ApprovalStatus.REJECT && req.body.status !== ApprovalStatus.PENDING : ApprovalStatus
    const status = ApprovalStatus.REJECT
    
    
    // const userStatus = ApprovalStatus.DEFAULT ? userRole.valueOf() === Role.USER : ApprovalStatus.PENDING
    // checks the userRole and if the userRole === USER , set the status to DEFAULT. otherwise status = PENDING
    // Admins are not going to be registered through frontend, only USER - (user registration) and CONTRIBUTOR -( ADMIN adds)  are registered

    let imageURL = ""//await imageUploader(req.file?.buffer)


    // console.log('Cloudinary Details!')
    // console.log(cloudinary)
    // console.log(cloudinary.uploader)

    console.log(`These are user role and status:  ${status}, ${roles}`)

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

    // setup the approval status based on the role

    // console.log(req.file)
    // console.log(`${newUser}}`)


    
   
    
    res.status(201).json({
        message: "successfully registered the user", 
        data: newUser
       })
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