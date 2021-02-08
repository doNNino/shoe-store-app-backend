const express = require('express');
// import of product controller
const productController = require('../controllers/productController');

const router = express.Router();
// get route for all products
router.route('/').get(productController.getAllProducts);
// export the router
module.exports = router;
