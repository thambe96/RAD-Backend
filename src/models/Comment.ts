import mongoose, { Schema } from "mongoose";
import { User } from "./User";

interface IComment {
    _id: mongoose.Types.ObjectId
    user: mongoose.Types.ObjectId
    movie: mongoose.Types.ObjectId
    userComment: string
   
}


const commentSchema = new Schema<IComment>({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: "MovieReview",
        required: true
    },
    userComment: {
        type: String,
        required: true
    }
    
})


export const Commemnt = mongoose.model<IComment>("Comment", commentSchema)