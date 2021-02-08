// imports
const express = require('express');
const morgan = require('morgan');
// routes imports
const productRouter = require('./routes/productRoutes');
// main app
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
/**
 * setting up the response header to match the CORS policy
 */
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// routes
app.use('/api/v1/products', productRouter);
//  export of the app
module.exports = app;
