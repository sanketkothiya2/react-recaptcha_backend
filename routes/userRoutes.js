const express = require("express");
const csvController = require("../controllers/userController");

const router = express.Router();

router.get(
  "/all",
  csvController.getAllUsers
);

router.post(
  "/create",
  csvController.create
);

module.exports = router;
