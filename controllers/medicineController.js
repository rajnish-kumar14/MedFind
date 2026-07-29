const Medicine = require("../models/Medicine");

// Add Medicine
const addMedicine = async (req, res) => {

    try {

        const medicine = new Medicine({

            name: req.body.name,
            company: req.body.company,
            price: req.body.price,
            quantity: req.body.quantity

        });

        await medicine.save();

        res.status(201).json({
            message: "Medicine Added Successfully",
            medicine: medicine
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};

// Get All Medicines
// Get Medicines
const getMedicines = async (req, res) => {

    try {

        const medicineName = req.query.name;

        let medicines;

        if (medicineName) {

            medicines = await Medicine.find({
                name: { $regex: medicineName, $options: "i" }
            });

        } else {

            medicines = await Medicine.find();

        }

        res.status(200).json({
            message: "Medicines Fetched Successfully",
            medicines: medicines
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};

// Update Medicine
const updateMedicine = async (req, res) => {

    try {

        const updatedMedicine = await Medicine.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        if (!updatedMedicine) {

            return res.status(404).json({
                message: "Medicine Not Found"
            });

        }

        res.status(200).json({
            message: "Medicine Updated Successfully",
            medicine: updatedMedicine
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};

// Delete Medicine
const deleteMedicine = async (req, res) => {

    try {

        const deletedMedicine = await Medicine.findByIdAndDelete(
            req.params.id
        );

        if (!deletedMedicine) {

            return res.status(404).json({
                message: "Medicine Not Found"
            });

        }

        res.status(200).json({
            message: "Medicine Deleted Successfully",
            medicine: deletedMedicine
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};

module.exports = {
    addMedicine,
    getMedicines,
    updateMedicine,
    deleteMedicine
};