import { Router } from "express"
import { createMovieReviewPost } from "../controllers/moveiReviewPost.controller"
import { upload } from "../middleware/upload"

const movieReviewPostRouter = Router()

movieReviewPostRouter.post("/createMovieReviewPost", upload.single("userimage"),createMovieReviewPost)


export default movieReviewPostRouter