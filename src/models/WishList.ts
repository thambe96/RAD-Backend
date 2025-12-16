import mongoose, { Schema } from "mongoose";

interface IWishList {
    _id: mongoose.Types.ObjectId
    user: mongoose.Types.ObjectId
    favouriteMovieReviews: mongoose.Types.ObjectId[]

}


const wishListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    favouriteMoveReviews: [ {
        type: Schema.Types.ObjectId,
        ref: "MovieReview"
    } ]

})