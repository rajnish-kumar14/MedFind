const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {

    try {

        // Check if user already exists
        const existingUser = await User.findOne({
            email: req.body.email
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        // Save user
        await user.save();

        res.status(201).json({
            message: "User Registered Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};

const login = async (req, res) => {

    try {

        const user = await User.findOne({
            email: req.body.email
        });

        if (!user) {
            return res.status(404).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                userId: user._id
            },
            process.env.JWT_SECRET
        );

        res.status(200).json({
            message: "Login Successful",
            token: token
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};

const profile = async (req, res) => {

    try {

        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};

module.exports = {
    signup,
    login,
    profile
};