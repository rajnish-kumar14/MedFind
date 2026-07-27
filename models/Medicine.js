const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    company: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    available: {
        type: Boolean,
        default: true
    }

});

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;