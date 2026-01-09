import { Router } from "express";
import { addComment, fetchAllCommentsByMovie } from "../controllers/comment.controller";


const commentRouer = Router()

commentRouer.post('/addComment', addComment)
commentRouer.get('/fetchAllCommentsbyId/:movieId', fetchAllCommentsByMovie)


export default commentRouer