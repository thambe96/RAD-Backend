import { Router } from "express";
import { addToWishList, fetchWishList, removeFromWishist } from "../controllers/wishlist.controller";


const wishListRouter = Router()


wishListRouter.post('/addToWishList/:userId', addToWishList)
wishListRouter.delete('/removeFromWishList/:userId', removeFromWishist)
wishListRouter.get('/fetchWishList/:userId', fetchWishList)


export default wishListRouter