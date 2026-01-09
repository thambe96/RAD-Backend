import { Request, Response } from "express";
import { Commemnt } from "../models/Comment";


export const addComment = async (req: Request, res: Response) => {

    const {movieId, userId, comment} = req.body
    // console.log(movieId)
    // console.log(userId)
    // console.log(comment)

     if (!movieId || !userId || !comment) {
        return res.json({message: "fields can not be empty"})
    }

    const newComment = new Commemnt(
        {
            user: userId,
            movie: movieId,
            userComment: comment
        }
    )

    try {

        const result = await newComment.save()
        res.status(201).json(result)

    } catch (error) {
        console.error(error)
        res.json({message: 'internal server error'})
    }

}

export const fetchAllCommentsByMovie = async (req: Request, res: Response) => {

    const {movieId} = req.params

    try {

        // if (!movieId) {
        //     return res.json({message: "no movie id provided"})
        // }

        const result = await Commemnt.find({
            movie: movieId
        }).populate("user")

        res.json(result)

    } catch (error) {
        console.error(error)
        res.json({message: "internal server error"})
    }

    
} 