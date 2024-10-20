import User from "../models/userSchema.js";
import Brand from '../models/brandSchema.js'

const userLogout = async(req,res) => {
    const cookies = req.cookies
    try {
        if(!cookies.user){
            return res.sendStatus(204)
        }
        const refreshToken = cookies.user
        const user = await User.findOne({refreshToken})
    
        if (!user) {
            res.clearCookie('user', {
                httpOnly:true,
                maxAge:24 * 60 * 60 * 1000
            })
    
            return res.sendStatus(204)
        }
    
        const deleteToken = User.findOneAndUpdare({refreshToken:" "})
        if(!deleteToken){
            return res.sendStatus(204)
        }
        res.clearCookie('user', {
            httpOnly:true,
            maxAge:24 * 60 * 60 * 1000 
        })
        res.status(204).json({message:"User logout successfull"})
    }catch(error){
        res.status(400).json({message:error})
    }
}

const brandLogout = async(req,res) => {
    const cookies = req.cookies
    try {
        if(!cookies.brand){
            return res.sendStatus(204)
        }
        const refreshToken = cookies.brand
        const user = await Brand.findOne({refreshToken})
    
        if (!user) {
            res.clearCookie('brand', {
                httpOnly:true,
                maxAge:24 * 60 * 60 * 1000
            })
    
            return res.sendStatus(204)
        }
    
        const deleteToken = await Brand.findOneAndUpdare({refreshToken:" "})
        if(!deleteToken){
            return res.sendStatus(204)
        }
        res.status(204).json({message:"Brand logout successfull"})
    }catch(error){
        res.status(400).json({message:error})
    }
}


//handle cookie clearing in the frontend
export {
    userLogout,
    brandLogout
}