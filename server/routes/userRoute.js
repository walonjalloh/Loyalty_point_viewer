import express from "express";
import { getOneUser,userSignin,userSignup,deleteUser } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.route('/signin').post(userSignin)
userRouter.route('/signup').post(userSignup)
userRouter.route('/:email').delete(deleteUser).get(getOneUser)


export {
    userRouter
}