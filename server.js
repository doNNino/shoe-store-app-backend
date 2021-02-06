// imports
require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

// Server listener
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`server working on ${port}`);
});
