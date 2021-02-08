// imports
require('dotenv').config();
const mongoose = require('mongoose');

// using DB string and  Password  from .env file
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
// DB connection
const dbConnect = () => {
  try {
    mongoose
      .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      })
      .then(() => console.log('DB connection successful'));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// export for DB connection
module.exports = dbConnect;
