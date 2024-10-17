import express from "express";
import { getOneUser,userSignin,userSignup,deleteUser,getAllUser,logout,autoLogin } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.route('/signin').post(userSignin)
userRouter.route('/signup').post(userSignup)
userRouter.route('/:username').delete(deleteUser).get(getOneUser)
userRouter.route('/').get(getAllUser)
userRouter.route('/logout').get(logout)
userRouter.route('/autologin').get(autoLogin)


export {
    userRouter
}