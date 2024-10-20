import User from "../models/userSchema.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const userSignin = async(req,res) => {
    const { username, password } = req.body
    try{
        if(!username || !password){
            res.send('All fields are required')
        }
        const user = await User.findOne({ username })
        if(!user){
            return res.send('User does not exist ')
        }
    
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(404).json({message: 'Login Failed'})
        }
    
        const accessToken = jwt.sign({_id:user._id.toString()}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:"10m"
        })

        const refreshToken = jwt.sign({_id:user._id.toString()}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn:"1d"
        })


        //saving refresh token to the database 
        user.refreshToken = refreshToken
        await user.save()

        const userResponse = user.toObject()
        delete userResponse.password
        res.cookie("user",refreshToken, {
            maxAge:24 * 60 * 60 * 1000,
            http0nly:true,
            secure:false,
            sameSite:"None"
        })
        res.status(200).json({message:'Login Sucessfull',user:userResponse,accessToken })
    }catch(error){
        console.log(`error occurred ${error}`)
        res.status(400).json({message:error})
    }

}

const userSignup = async(req,res) => {
    const { fullname, username, password,address,age }  = req.body
    try {
        
        if(!fullname || !username || !password || !address || !age){
            return res.send(`All fields are required`)
        }

        const existUser = await User.findOne({ username })
        if(existUser){
           return res.status(409).send('User all ready exist')
        }

        const passwordHashed = await bcrypt.hash(password,10)

        const user = new User({
            fullname,
            address,
            age,
            username,
            password:passwordHashed
        })

        await user.save()
        const userResponse = user.toObject()
        delete userResponse.password

        res.status(201).json({user:userResponse})
        

    }catch(error){
        res.status(401).json({message:'Error in creating user'})
    }
}

const getOneUser = async(req,res) => {
    const { username } = req.params
    try {
        const user = await User.findOne({ username })
        if(!user){
            return res.status(404).json({message: 'Invalid user'})
        }
        const userResponse = user.toObject()
        delete userResponse.password

        res.status(200).json(userResponse)

    }catch(error){
        res.status(400).json({message:error})
    }
}

const deleteUser = async(req,res) => {
    const { email } = req.params
    try{
        const user = await User.findOneAndDelete({ email })
        if(!user){
            return res.status(404).json({message: 'Invalid User'})
        }
        res.status(200).json({message:'User deleted'})
    }catch(error){
        res.status(401).json({message:error})
    }
}

const getAllUser = async(req,res) => {
    try{
        const users = await User.find({})
        if(!users){
            res.status(404).json({message:"No users available"})
        }
        res.status(200).json(users)
    }catch(error){
        res.status(400).json({message:error})
    }
}

const autoLogin = async(req,res) => {
    const cookie = req.header.cookie

    if(!cookie || cookie === null){
       return res.status(401)
    }
    return res.status(200)
}

const logout = async(req,res) => {
    res.clear('user')
    return res.status(200)
}

export {
    userSignin,
    userSignup,
    getOneUser,
    deleteUser,
    getAllUser,
    autoLogin,
    logout
}