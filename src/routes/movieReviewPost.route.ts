import { Router } from "express"
import { createMovieReviewPost, getAllMovieReviews } from "../controllers/moveiReviewPost.controller"
import { upload } from "../middleware/upload"

const movieReviewPostRouter = Router()

movieReviewPostRouter.post("/createMovieReviewPost", upload.single("userimage"),createMovieReviewPost)
movieReviewPostRouter.get('/getAllMovieReviews', getAllMovieReviews)


export default movieReviewPostRouter