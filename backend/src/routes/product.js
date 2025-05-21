const express = require('express');
const router = express.Router();
const product = require('../data/product');

router.get('/', (req, res) => {
  res.json(product);
});

module.exports = router;