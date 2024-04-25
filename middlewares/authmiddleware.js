const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorized token expired, please login again");
    }
  } else {
    throw new Error("Authorization header missing or invalid");
  }
}

const isAdmin = async (req, res, next) => {
  try {
  const  {email}  = req.body;
    const adminUser = await User.findOne({ email });
    if (!adminUser || adminUser.role !== "admin") {
      throw new Error('You are not an admin');
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authMiddleware, isAdmin };
