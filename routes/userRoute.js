const express = require("express");
const { createUser,loginUser } = require("../controller/userController");
const { isUser } = require("../middlewares/authmiddleware")
const router = express.Router();
router.post("/register", createUser);
router.post("/login", isUser,loginUser);


module.exports = router;
