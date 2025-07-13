const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
    name : String,
    price : Number,
    description : String,
    image : String,
    stock : Number,
});

module.exports = mongoose.model("Product",productScheme);