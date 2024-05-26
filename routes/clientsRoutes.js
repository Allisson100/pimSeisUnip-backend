const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

router.post("/create", clientController.createClient);
router.get("/list", clientController.listClients);

module.exports = router;
