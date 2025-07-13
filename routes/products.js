const express = require("express");
const router = express.Router();
const { getAll, create } = require("../controllers/productController");

router.get("/", getAll);
router.post("/", create); // In real app, add admin auth

module.exports = router;
