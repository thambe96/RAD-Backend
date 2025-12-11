
import { Request, Response } from "express"


export const testPostAPI = (req: Request, res: Response) => {

    const {name, age, email} = req.body
    // console.log(req)
    console.log(req.body)
    console.log(`Name: ${name} \nAge: ${age}\nEmail: ${email}`)
    console.log(req.params)
    console.log(req.query)
    
    return res.status(201).json({message: "Test api is working fine!", data: {
        id: "no Message",
        firstname: "Oshadah",
        lastname: "Thambavita"
    }})
}