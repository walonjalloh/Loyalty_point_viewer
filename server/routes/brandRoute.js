import express from "express";
import { brandSignin,brandSignup,deleteBrand,getAllBrand,brandautoLogin,brandlogout } from "../controllers/brandController.js";

const brandRouter = express.Router()

brandRouter.route('/signin').post(brandSignin)
brandRouter.route('/signup').post(brandSignup)
brandRouter.route('/').get(getAllBrand)
brandRouter.route('/:name').delete(deleteBrand)
brandRouter.route('/brandlogout').get(brandlogout)
brandRouter.route('/brandautologin').get(brandautoLogin)

export{
    brandRouter
}