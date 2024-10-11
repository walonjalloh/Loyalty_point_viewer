import Brand from '../models/brandSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const brandSignin = async(req,res) => {
    const {name, password} = req.body
    try{
        if(!name || !password){
            return res.status(404).json({message:'All fields are required'})
        }

        const brand = await Brand.findOne({name})
        if(!brand){
            return res.status(404).json({message:'Brand doesnot exist'})
        }

        const passwordMatch = await bcrypt.compare(password,brand.password)
        if(!passwordMatch){
            return res.status(400).json({message:'Invalid credentials'})
        }

        const token = jwt.sign({_id:brand._id.toString()},process.env.JWT_SECRET)
        const brandResponse = brand.toObject()
        delete brandResponse.password
        res.cookie("brand",token,{
            maxAge:24 * 60 * 60 * 1000,
            httpOnly:true,
            secure:true,
            sameSite:"None"
        })
        res.status(200).json({brand:brandResponse,token})

    }catch(error){
        res.status(404).json({message:'error signing'})
    }
}

const brandSignup = async(req,res) => {
    const {name, password} = req.body
    try{
        if(!name || !password){
            return res.status(404).json({message:'All fields are required'})
        }
        
        const existBrand = Brand.findOne({name})
        if(existBrand){
            return res.status(404).json({message:'User already exist'})
        }

        const passwordHashed = await bcrypt.hash(password,10)

        const brand = new Brand({
            name,
            password:passwordHashed
        })

        const token = await jwt.sign({_id:brand._id.toString()},process.env.JWT_SECRET)

        await brand.save()
        const brandResponse = brand.toObject()
        delete brandResponse.password

        res.status(201).json({
            brand:brandResponse,token
        })

        
    }catch(error){
        res.status(400).json({message:'Error creating brand account'})
    }
}

const getAllBrand = async(req,res) => {
    const brands = await Brand.find({})
    if(!brands){
        return res.status(404).json({message:'invalid request'})
    }
    res.status(200).json(brands)
}

const deleteBrand = async(req,res) => {
    const { name } = req.params
    try {
        const brand = await Brand.findOneAndDelete({name})
    if(!brand){
        return res.status(404).json({message:'brand does not exist'})
    }
    res.status(200).json({message:'deleted sucessfully'})
    }catch(error){
        res.status(401).json({message:'error deleting brand '})
    }
}

export {
    brandSignin,
    brandSignup,
    getAllBrand,
    deleteBrand
}