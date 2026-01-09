import { Request, Response } from "express"
import Stripe from "stripe"


const SECRET_KEY = process.env.STRIPE_SECRETE_KEY as string
const PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY as string

const stripe = new Stripe(SECRET_KEY, { apiVersion: "2025-12-15.clover"})

export const donationHandler = async (req: Request, res: Response) => {

    const { amount } = req.body

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: { enabled: true }
        })

        res.json({ clientSecret: paymentIntent.client_secret})

    } catch (error) {
        res.json({message: error})
    }
    
}


export const getPublishableKey = (req: Request, res: Response) => {
    res.json({publishableKey: `${PUBLISHABLE_KEY}`})
}