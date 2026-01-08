import { Request, Response } from "express";


export const addComment = (req: Request, res: Response) => {
    res.json({message: 'Comment added successful!'})
}

export const fetchAllComments = (req: Request, res: Response) => {
    res.json({message: ''})
} 