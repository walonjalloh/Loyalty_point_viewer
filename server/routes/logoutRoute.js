import express from 'express'
import { userLogout,brandLogout } from '../controllers/logoutController.js'

const logoutRouter = express.Router()

logoutRouter.route('/userlogout').get(userLogout)
logoutRouter.route('/brandlogout').get(brandLogout)

export {
    logoutRouter
}