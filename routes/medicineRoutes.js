const express = require("express");

const router = express.Router();

const {

    addMedicine,
    getMedicines,
    updateMedicine,
    deleteMedicine

} = require("../controllers/medicineController");

router.post("/medicine", addMedicine);

router.get("/medicine", getMedicines);

router.put("/medicine/:id", updateMedicine);

router.delete("/medicine/:id", deleteMedicine);

module.exports = router;