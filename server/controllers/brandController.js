import Brand from "../models/brandSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const brandSignin = async (req, res) => {
  const { brandname, brandpassword } = req.body;
  try {
    if (!brandname || !brandpassword) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const brand = await Brand.findOne({ brandname });
    if (!brand) {
      return res.status(404).json({ message: "Brand doesnot exist" });
    }

    const passwordMatch = await bcrypt.compare(
      brandpassword,
      brand.brandpassword
    );
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      { _id: brand._id.toString() },
      process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"10m"
      }
    );

    const refreshToken = jwt.sign({_id:brand._id.toString()}, process.env.REFRESH_TOKEN_SECRET,{
      expiresIn:"1d"
    })

    //saving the refresh token to the database
    brand.refreshToken = refreshToken
    await brand.save()


    const brandResponse = brand.toObject();
    delete brandResponse.brandpassword;

    res.cookie("brand", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "None",
    });
    res.status(200).json({ brand: brandResponse, accessToken});
  } catch (error) {
    res.status(404).json({ message: "error signing" });
  }
};

const brandSignup = async (req, res) => {
  const { brandname, brandpassword } = req.body;

  try {
    if (!brandname || !brandpassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingBrand = await Brand.findOne({ brandname });
    if (existingBrand) {
      return res.status(400).json({ message: "Brand already exists" });
    }

    const passwordHashed = await bcrypt.hash(brandpassword, 10);

    const newBrand = new Brand({
      brandname,
      brandpassword: passwordHashed,
    });

    await newBrand.save();
    const brandResponse = newBrand.toObject();
    delete brandResponse.brandpassword;

    res.status(201).json({ brand: brandResponse});
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    } else {
      console.error("Error creating brand:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

const getAllBrand = async (req, res) => {
  const brands = await Brand.find({});
  if (!brands) {
    return res.status(404).json({ message: "invalid request" });
  }
  res.status(200).json(brands);
};

const deleteBrand = async (req, res) => {
  const { name } = req.params;
  try {
    const brand = await Brand.findOneAndDelete({ name });
    if (!brand) {
      return res.status(404).json({ message: "brand does not exist" });
    }
    res.status(200).json({ message: "deleted sucessfully" });
  } catch (error) {
    res.status(401).json({ message: "error deleting brand " });
  }
};

const brandautoLogin = async(req,res) => {
  const cookie = req.header.cookie

  if(!cookie || cookie === null){
     return res.status(401)
  }
  return res.status(200)
}

const brandlogout = async(req,res) => {
  res.clear('brand')
  return res.status(200)
}

export { brandSignin, brandSignup, getAllBrand, deleteBrand,brandautoLogin,brandlogout };
