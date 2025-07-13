const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  const { products, total } = req.body;
  const newOrder = await Order.create({
    userId: req.user.id,
    products,
    total,
  });
  res.json({ message: "Order placed", order: newOrder });
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};
