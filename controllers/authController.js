const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {

    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await user.save();

        res.send("User Registered Successfully");

    } catch (err) {

        console.log(err);
        res.status(500).send("Something went wrong");

    }

};

const login = async (req, res) => {

    try {

        const user = await User.findOne({
            email: req.body.email
        });

        if (!user) {
            return res.status(404).send("User not found");
        }

        console.log("Entered Password:", req.body.password);
        console.log("Stored Password:", user.password);

        const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).send("Invalid Password");
        }

        const token = jwt.sign(
            {
                userId: user._id
            },
            process.env.JWT_SECRET
        );

        res.send({
            message: "Login Successful",
            token: token
        });

    } catch (err) {

        console.log(err);
        res.status(500).send("Something went wrong");

    }

};

const profile = async (req, res) => {

    try {

        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send(user);

    } catch (err) {

        console.log(err);
        res.status(500).send("Something went wrong");

    }

};

module.exports = {
    signup,
    login,
    profile
};