import jwt from 'jsonwebtoken';
import Brand from '../models/brandSchema.js';

const brandAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'No token provided. Please authenticate.' });
    }

    // Verify the token and extract the payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the brand using the ID from the decoded token
    const brand = await Brand.findOne({ _id: decoded._id });

    if (!brand) {
      return res.status(401).json({ error: 'Invalid token. Brand not found.' });
    }

    // Attach brand and token to the request object for further use
    req.token = token;
    req.brand = brand;

    console.log('Brand authenticated successfully');
    next();  // Move to the next middleware or route handler
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(401).json({ error: 'Authentication failed. Please log in again.' });
  }
};

export { brandAuth };
