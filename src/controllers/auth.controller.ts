import { Request, Response } from "express"


export const register = (req: Request, res: Response) => {
    // console.log("Hi this register endpoint")
    // lastname: string
    // email: string
    // password: string
    // roles: Role[]
    // imageURL?: string
    // status?: ApprovalStatus
    

    const {firstname, lastname, imageURL, email, password} = req.body
    // const firstname = req.body.name
    // const lastname = req.body.lname

    console.log(`${firstname} ${lastname} ${imageURL} ${email}`)



    // setup the approval status based on the role

    // console.log(req.body)

    res.status(201).json({
        message: "successfully registered the user", 
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