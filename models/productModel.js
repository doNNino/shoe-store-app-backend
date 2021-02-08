const mongoose = require('mongoose');

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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
