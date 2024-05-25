const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const upload = require("../config/multerConfig");

router.post("/create", upload.array("images"), productController.createProduct);

module.exports = router;
