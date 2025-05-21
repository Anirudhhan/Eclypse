const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/product');

const app = express();
const PORT = 5001;

app.use(cors());

app.use(cors({
  origin: "http://localhost:5173", // your Vite frontend
  credentials: true
}));

app.use(express.json());

app.use('/api/product', productRoute);

app.use('/images', express.static('public/images'));
app.use('/videos', express.static('public/videos'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
