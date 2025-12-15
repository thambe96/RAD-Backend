import mongoose from "mongoose";
import { Document, Schema } from "mongoose";


interface IMovieReview extends Document{
    _id: mongoose.Types.ObjectId
    title: string,
    content: string,
    comments?: [mongoose.Types.ObjectId]
    
    // more attributes to be added - comments, likes
}


const imovieReviewSchema = new Schema<IMovieReview>({
    title: {type: String, required: true},
    content: {type: String, required: true},
    comments: {type: [Schema.Types.ObjectId], ref: "Comment"}
    
})


export const MovieReview = mongoose.model<IMovieReview>("MovieReview", imovieReviewSchema)


