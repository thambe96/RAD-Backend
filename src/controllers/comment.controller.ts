import { Request, Response } from "express";


export const addComment = (req: Request, res: Response) => {

    const {userId} = req.params
    const {movieId, comment } = req.query


    res.json({message: 'Comment added successful!'})
}

export const fetchAllComments = (req: Request, res: Response) => {
    res.json({message: ''})
} 