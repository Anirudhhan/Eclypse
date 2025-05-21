import express from 'express';
import product from '../data/product.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(product);
});

export default router;