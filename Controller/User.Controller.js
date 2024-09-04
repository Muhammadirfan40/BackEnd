
const userModel = require("../Models/User.model")
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken")
require('dotenv').config()

const userRegister = async (req, res) => {


    try {

        const { email, password } = req.body;
      
        
        const hashpasword = await bcrypt.hash(password, 15)
      
        const already = await userModel.findOne({ email: email });
        if (already) {
            res.status(400).json({
                status: false,
                message: "User is already Register",

            })


        } else {
            const User = await userModel.create({ email: email, password: hashpasword });
            res.status(400).json({
                status: true,
                message: "User register successfully!",
                user: User
            })
        }

    } catch (error) {

        res.status(400).json({
            status: false,
            message: "User is not Register",

        })

    }

};

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(200).json({
                error: true,
                message: "Email and password are required",
            });
        }

        // Find the user by email
        const user = await userModel.findOne({ email: email });

        // Check if user exists
        if (!user) {
            return res.status(200).json({
                error: true,
                message: "User not found",
            });
        }

        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        // If password doesn't match, return an error
        if (!passwordMatch) {
            return res.status(200).json({
                error: true,
                message: "Incorrect password",
            });
        }

        const acces_token = jwt.sign({uerid: user._id}, process.env.ACCESS_KEY, {expiresIn:'24h'})

        // If everything is okay, send the user data
        res.status(200).json({
            error: false,
            message:"success fully login",
            user: user,
            acces_token:acces_token
        });

    } catch (error) {
        // Handle unexpected errors
        res.status(500).json({
            error: true,
            message: "Internal server error",
        });
    }
};


module.exports = { userLogin , userRegister };
