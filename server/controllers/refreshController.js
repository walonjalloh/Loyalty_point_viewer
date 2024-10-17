import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';
import Brand from '../models/brandSchema.js';

// User Refresh Token Handler
const userRefreshToken = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.user) {
      return res.status(401).json({ message: 'No user token provided' });
    }

    const refreshToken = cookies.user;
    console.log('User Refresh Token:', refreshToken);

    const user = await User.findOne({ refreshToken });
    if (!user) {
      return res.status(403).json({ message: 'User not found or invalid token' });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.error('JWT Error:', err);
        return res.status(403).json({ message: 'Invalid or expired token' });
      }

      if (user._id.toString() !== decoded._id) {
        return res.status(403).json({ message: 'Token mismatch' });
      }

      const accessToken = jwt.sign({ _id: decoded._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
      return res.status(200).json({ accessToken });
    });
  } catch (error) {
    console.error('User Refresh Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Brand Refresh Token Handler
const brandRefreshToken = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.brand) {
      return res.status(401).json({ message: 'No brand token provided' });
    }

    const refreshToken = cookies.brand;
    console.log('Brand Refresh Token:', refreshToken);

    const brand = await Brand.findOne({ refreshToken });
    if (!brand) {
      return res.status(403).json({ message: 'Brand not found or invalid token' });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.error('JWT Error:', err);
        return res.status(403).json({ message: 'Invalid or expired token' });
      }

      if (brand._id.toString() !== decoded._id) {
        return res.status(403).json({ message: 'Token mismatch' });
      }

      const accessToken = jwt.sign({ _id: decoded._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
      return res.status(200).json({ accessToken });
    });
  } catch (error) {
    console.error('Brand Refresh Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { userRefreshToken, brandRefreshToken };
