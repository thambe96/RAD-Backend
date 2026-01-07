import { Router } from "express"
import { createMovieReviewPost, getAllMovieReviews, getMyReviews } from "../controllers/moveiReviewPost.controller"
import { upload } from "../middleware/upload"

const movieReviewPostRouter = Router()

movieReviewPostRouter.post("/createMovieReviewPost", upload.single("userimage"),createMovieReviewPost)
movieReviewPostRouter.get('/getAllMovieReviews', getAllMovieReviews)
movieReviewPostRouter.get('/getMyMovieReviews/:contributorId', getMyReviews)


export default movieReviewPostRouter