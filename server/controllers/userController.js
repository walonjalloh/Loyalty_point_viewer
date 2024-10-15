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
    
        const token = jwt.sign({_id:user._id.toString()}, process.env.JWT_SECRET)
        const userResponse = user.toObject()
        delete userResponse.password
        res.cookie("user",token, {
            maxAge:24 * 60 * 60 * 1000,
            http0nly:true,
            secure:true,
            sameSite:"None"
        })
        res.status(200).json({message:'Login Sucessfull',user:userResponse})
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

        res.status(201).json({user:userResponse,token})
        

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

export {
    userSignin,
    userSignup,
    getOneUser,
    deleteUser
}