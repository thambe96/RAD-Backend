import mongoose from "mongoose";
import { Document, Schema } from "mongoose";


interface IMovieReview extends Document{
    _id: mongoose.Types.ObjectId
    title: string,
    content: string,
    category: string,
    movieImageURL: string,
    // more attributes to be added - comments, likes
}


const imovieReviewSchema = new Schema<IMovieReview>({
    title: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
    movieImageURL: {type: String, required: true},
    
})


export const MovieReview = mongoose.model<IMovieReview>("MovieReview", imovieReviewSchema)


