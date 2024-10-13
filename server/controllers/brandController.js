import Brand from '../models/brandSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const brandSignin = async(req,res) => {
    const {brandname, brandpassword} = req.body
    try{
        if(!brandname || !brandpassword){
            return res.status(404).json({message:'All fields are required'})
        }

        const brand = await Brand.findOne({brandname})
        if(!brand){
            return res.status(404).json({message:'Brand doesnot exist'})
        }

        const passwordMatch = await bcrypt.compare(brandpassword,brand.brandpassword)
        if(!passwordMatch){
            return res.status(400).json({message:'Invalid credentials'})
        }

        const token = jwt.sign({_id:brand._id.toString()},process.env.JWT_SECRET)
        const brandResponse = brand.toObject()
        delete brandResponse.password
        res.cookie("brand",token,{
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly:true,
            secure:true,
            sameSite:"None"
        })
        res.status(200).json({brand:brandResponse,token})

    }catch(error){
        res.status(404).json({message:'error signing'})
    }
}


const brandSignup = async (req, res) => {
    const { brandname, brandpassword } = req.body;
  
    try {
      if (!brandname || !brandpassword) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const existingBrand = await Brand.findOne({ brandname });
      if (existingBrand) {
        return res.status(400).json({ message: 'Brand already exists' });
      }
  
      const passwordHashed = await bcrypt.hash(brandpassword, 10);
  
      const newBrand = new Brand({
        brandname,
        brandpassword: passwordHashed,
      });
  
      await newBrand.save();
  
      const token = jwt.sign({ _id: newBrand._id.toString() }, process.env.JWT_SECRET);
  
      const brandResponse = newBrand.toObject();
      delete brandResponse.brandpassword;
  
      res.status(201).json({ brand: brandResponse, token });
    } catch (error) {
      if (error.name === 'ValidationError') {
        // Handle validation errors specifically
        return res.status(400).json({ message: 'Validation error', errors: error.errors });
      } else {
        console.error('Error creating brand:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
};


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