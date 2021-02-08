// imports
require('dotenv').config();
const dbConnect = require('./dbConnection');
const app = require('./app');

dbConnect();
// Server listener
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`server working on ${port}`);
});
