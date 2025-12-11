
import { Router } from "express";
import { testPostAPI } from "../controllers/testApi.controller"


const testRoute = Router()


testRoute.post("/testRoutePost", testPostAPI)





export default testRoute

