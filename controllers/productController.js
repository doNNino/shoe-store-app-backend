const fs = require('fs');

// reading files with the fs module

const data = fs.readFileSync(`${__dirname}/../products.json`, 'utf8');
const parsedProductData = JSON.parse(data);

exports.getAllProducts = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: parsedProductData
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
