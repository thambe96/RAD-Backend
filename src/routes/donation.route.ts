import { Router } from "express"; 
import { donationHandler } from "../controllers/donation.controller";

export const donationRouter = Router()

donationRouter.post('/createPaymentIntent', donationHandler)