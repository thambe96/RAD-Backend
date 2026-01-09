import { Router } from "express"; 
import { donationHandler, getPublishableKey } from "../controllers/donation.controller";

export const donationRouter = Router()

donationRouter.post('/createPaymentIntent', donationHandler)
donationRouter.get('/getpbkey', getPublishableKey)