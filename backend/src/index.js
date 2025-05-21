import express from 'express';
import cors from 'cors';
import path from 'path';
import productRoute from './routes/product.js';

const app = express();
const PORT = 5001;

app.use(cors());
const __dirname = path.resolve();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));


app.use(express.json());

app.use('/api/product', productRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
};

app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/videos', express.static(path.join(__dirname, 'public/videos')));


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
