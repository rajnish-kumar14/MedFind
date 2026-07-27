const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    try {

        const token = req.headers.authorization;

        const actualToken = token.split(" ")[1];

        const decoded = jwt.verify(
            actualToken,
            process.env.JWT_SECRET
        );

        req.userId = decoded.userId;

        next();

    } catch (err) {

        res.status(401).send("Invalid Token");

    }

};

module.exports = auth;