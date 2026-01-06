import mongoose from "mongoose";
import { Document, Schema } from "mongoose";


export enum Ctegory {
    COMEDY = "COMEDY",
    ACTION = "ACTION",
    THRILLER = "THRILLER",
    ROMANCE = "TOMANCE",
    DETECTIVE = "DETECTIVE",
    WAR = "WAR",
    DRAMA = "DRAMA"

}

interface IMovieReview extends Document{
    _id: mongoose.Types.ObjectId
    title: string,
    content: string,
    categories: Ctegory[],
    movieImageURL: string,
    contributor: mongoose.Types.ObjectId
    // more attributes to be added - comments, likes
}


const imovieReviewSchema = new Schema<IMovieReview>({
    title: {type: String, required: true},
    content: {type: String, required: true},
    categories: {type: [String], enum: Object.values(Ctegory), required: true},
    movieImageURL: {type: String, required: true},
    contributor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
    
})


export const MovieReview = mongoose.model<IMovieReview>("MovieReview", imovieReviewSchema)


