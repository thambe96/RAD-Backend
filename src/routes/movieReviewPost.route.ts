import { Router } from "express"
import { createMovieReviewPost } from "../controllers/moveiReviewPost.controller"

const movieReviewPostRouter = Router()

movieReviewPostRouter.post("/createMovieReviewPost", createMovieReviewPost)


export default movieReviewPostRouter