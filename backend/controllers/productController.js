const Product = require("../models/Product");

exports.getAll = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.create = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};
