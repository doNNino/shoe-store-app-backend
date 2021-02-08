const mongoose = require('mongoose');
// creating new product schema with necesarry fields
const productSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, 'product need to have a name'],
    trim: true
  },
  Brand: {
    type: String,
    required: [true, 'product need to have a brand name'],
    trim: true
  },
  Price: {
    type: Number,
    required: [true, 'product need to have a price']
  },
  ImgSrc: {
    type: String,
    default: ''
  }
});
// creating new Product model out of product schema
const Product = mongoose.model('Product', productSchema);
// Exporting Product model
module.exports = Product;
