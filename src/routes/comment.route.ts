import { Router } from "express";
import { addComment, fetchAllComments } from "../controllers/comment.controller";


const commentRouer = Router()

commentRouer.post('/addComment', addComment)
commentRouer.get('/fetchAllComments/:userId', fetchAllComments)


export default commentRouer