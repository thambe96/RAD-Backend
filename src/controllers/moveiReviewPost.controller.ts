import { Request, Response } from "express"

export const createMovieReviewPost = (req: Request, res: Response) => {
    console.log('Hi this is createMovieReviewPost endpoint')
    return res.status(201).json({message: "createMovieReviewPost endpoint!!"})
}

export const deleteMovieReviewPost = (req: Request, res: Response) => {
    return res.status(201).json({message: "Movie Post deleted successfully!!"})
}


export const updateaMovieReviewPost = (req: Request, res: Response) => {
    return res.status(205).json({message: "Movie Post updated successfully!"})
}

export const getClieckedPost = (req: Request, res: Response) => {
    return res.status(201).json({message: "Mov post retrieved successfully!"})
}