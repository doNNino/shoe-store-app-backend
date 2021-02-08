const Product = require('../models/productModel');
/**
 * function that queries the DB and return products array as data
 * @param {Object} req -request object
 * @param {Object} res -response object
 */
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      data: products
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
