const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/product');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/product', productRoute);

// Optional: serve static images from public/images
app.use('/images', express.static('public/images'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});