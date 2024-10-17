import express from 'express'
import { userRefreshToken,brandRefreshToken } from '../controllers/refreshController.js'


const refreshRouter = express.Router()

refreshRouter.route('/refresh_user').get(userRefreshToken)
refreshRouter.route('/refresh_brand').get(brandRefreshToken)

export {
    refreshRouter
}