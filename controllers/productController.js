const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      status: 'success',
      data: products
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
