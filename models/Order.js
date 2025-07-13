const mongoose = require("mongoose");

const orderScheme = new mongoose.Schema({
    userId : mongoose.Schema.ObjectId,
    products: [
        {
            productId: mongoose.Schema.Types.ObjectId,
            quantity: Number,
        },
    ],
    total: Number,
    status: {type: String,default: "Pending"},
});

module.exports = mongoose.model("Order",orderScheme);