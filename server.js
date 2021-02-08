// imports
require('dotenv').config();
const dbConnect = require('./dbConnection');
const app = require('./app');
// Db connection function
dbConnect();
// Server listener
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`server working on ${port}`);
});
