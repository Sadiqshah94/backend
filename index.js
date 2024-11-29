import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/productRoutes.js';

const app = express();
dotenv.config();

// Enable CORS
app.use(cors()); // Add this line
app.use(express.json());

app.get('/', (req, res) => {
    console.log("Welcome to express");
    res.status(200).send('Welcome to express');
});

app.use('/products', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server Started on PORT:", PORT);
});
