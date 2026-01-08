import { Router } from "express";
import { addComment, fetchAllComments } from "../controllers/comment.controller";


const commentRouer = Router()

commentRouer.post('/addComment', addComment)
commentRouer.get('/fetchAllComments', fetchAllComments)


export default commentRouer