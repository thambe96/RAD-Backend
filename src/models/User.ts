import mongoose from "mongoose"
import mogoose, { Document, Schema } from "mongoose"


export enum Role{

    ADMIN = "ADMIN",
    CONTRIBUTOR = "CONTRIBUTOR",
    USER = "USER"
    

}

export enum ApprovalStatus {
    PENDING = "PENDING",
    REJECT = "REJECT",
    APPROVED = "APPROVED",
    DEFAULT = "DEFAULT" // default status for a normal user
}


export interface IUser extends Document {
    _id: mogoose.Types.ObjectId
    firstname: string
    lastname: string
    email: string
    password: string
    roles: Role[]
    imageURL?: string
    status?: ApprovalStatus

}

const userSchema = new Schema<IUser> ({
    firstname : {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    roles: {type: [String], enum: Object.values(Role), default: [Role.ADMIN, Role.USER]},
    imageURL: {type: String},
    status: {type: String, enum: Object.values("ApprovalStatus"), default: ApprovalStatus.DEFAULT}
   
}

)

export const User = mongoose.model<IUser>("User", userSchema)




