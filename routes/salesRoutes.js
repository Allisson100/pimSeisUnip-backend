const express = require("express");
const router = express.Router();
const saleController = require("../controller/saleController");

router.post("/create", saleController.createSale);
router.get("/list", saleController.listSales);

module.exports = router;
