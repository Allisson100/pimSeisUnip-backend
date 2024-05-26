const express = require("express");
const router = express.Router();
const saleController = require("../controller/saleController");

router.post("/create", saleController.createSale);
router.get("/list", saleController.listSales);
router.post("/cancel/:uuid", saleController.cancelSales);

module.exports = router;
