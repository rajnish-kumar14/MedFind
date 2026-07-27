const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const medicineRoutes = require("./routes/medicineRoutes");

const app = express();

app.use(express.json());

// Authentication Routes

app.use(authRoutes);
app.use(medicineRoutes);




// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log(err);
});

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to MediFind Backend");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});