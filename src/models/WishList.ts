import mongoose, { Schema } from "mongoose";

interface IWishList {
    _id: mongoose.Types.ObjectId
    user: mongoose.Types.ObjectId
    favouriteMovieReviews: mongoose.Types.ObjectId
    // favouriteMovieReviews: mongoose.Types.ObjectId[]

}


const wishListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    favouriteMovieReviews: {
        type: Schema.Types.ObjectId,
        ref: "MovieReview"
    } 

    // favouriteMoveReviews: [ {
    //     type: Schema.Types.ObjectId,
    //     ref: "MovieReview"
    // } ]

})

export const WishList = mongoose.model<IWishList>("WishList", wishListSchema)