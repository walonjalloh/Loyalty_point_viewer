import express from "express";
import { brandSignin,brandSignup,deleteBrand,getAllBrand } from "../controllers/brandController.js";

const brandRouter = express.Router()

brandRouter.route('/signin').post(brandSignin)
brandRouter.route('signup').post(brandSignup)
brandRouter.route('/').get(getAllBrand)
brandRouter.route('/:name').delete(deleteBrand)

export{
    brandRouter
}