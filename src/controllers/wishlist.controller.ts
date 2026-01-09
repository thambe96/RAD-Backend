
import { Request, Response } from "express"
import { WishList } from "../models/WishList"
import { MovieReview } from "../models/MovieReview"



export const addToWishList = async (req: Request, res: Response) => {

    const {userId} = req.params
    const { movieReviewId } = req.query

    console.log(userId)
    console.log(movieReviewId)

    console.log('in add to wish list endpoint!')

    try {

        const newWishListRecord = new WishList(
            {
                user: userId,
                favouriteMovieReviews: movieReviewId
            }
        )

        const result = await newWishListRecord.save()
        console.log(result)
        res.status(201).json(result)


    } catch (error) {
        console.error(error)
        res.status(501).json('server error')
    }

   

    // res.json({message: 'Added to the wishlist '})
} 

export const removeFromWishist = async (req: Request, res: Response) => {
    const { userId } = req.params
    const { movieReviewId } = req.query

    if (!userId || !movieReviewId) {
        return res.status(400).json({message: 'userId path variable or movieReviewId q-pramaerter is empty'})
    }


    try {

        const result = await WishList.findOneAndDelete({
            user: userId,
            favouriteMovieReviews: movieReviewId
        })
        if (!result) {
            return res.json([])
        }
        res.status(201).json(result)

    } catch (error) {
        console.error(error)
        res.status(501).json({message: 'server error'})
    }


}


export const fetchWishList = async (req: Request, res: Response) => {

    try {

        console.log('in fetch wishlist endpoint!!')

        const { userId } = req.params
        console.log(userId)

        const wishList = await WishList.find({user: userId})
        .populate("user")
        .populate("favouriteMovieReviews")

        if (!wishList || wishList.length === 0) {
            return res.status(404).json([])
        }

        res.status(200).json(wishList)


    } catch (error) {
        console.error(error)
        res.status(501).json({message: 'server error'})

    }
    


    // res.json({message: 'Fetch all the request '})
}