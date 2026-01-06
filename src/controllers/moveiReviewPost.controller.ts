import { Request, Response } from "express"
import { imageUploader } from "../utils/upload.image"
import { MovieReview } from "../models/MovieReview"

export const createMovieReviewPost = async (req: Request, res: Response) => {

    // title: string,
    // content: string,
    // categories: Ctegory[],
    // movieImageURL: string,


    try {
        const {title, content, categories, contributor} = req.body
        const movieImageURL = await imageUploader(req.file?.buffer)
        console.log(title)
        console.log(content)
        console.log(categories)
        console.log(movieImageURL)

        // create the MovieReview Object model and save it

        const newMovieReview = new MovieReview({
            title,
            content,
            categories,
            movieImageURL,
            contributor

        })  

        const savedMoviwReview = await newMovieReview.save()

        res.status(201).json(savedMoviwReview)


    } catch (error) {
        console.error(error)
        res.status(501).json({ error: "Faild to save review" })
    }
    

    console.log('Hi this is createMovieReviewPost endpoint')
    
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

export const getAllMovieReviews = async (req: Request, res: Response) => {

    try {

        const movieReviewList = await MovieReview.find()
        res.status(200).json(movieReviewList)

    } catch (error) {
        console.error(error)
        res.status(501).json({message: 'Faild to fetch reviews'})
    }
    
}