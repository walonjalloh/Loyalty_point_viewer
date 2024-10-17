import jwt from "jsonwebtoken";
import Brand from "../models/brandSchema.js";

const brandAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ error: "No token provided. Please authenticate." });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const brand = await Brand.findOne({ _id: decoded._id });

    if (!brand) {
      return res.status(401).json({ error: "Invalid token. Brand not found." });
    }

    req.token = token;
    req.brand = brand;

    console.log("Brand authenticated successfully");
    next();
  } catch (error) {
    console.error("Authentication failed:", error);
    res
      .status(401)
      .json({ error: "Authentication failed. Please log in again." });
  }
};

export { brandAuth };
