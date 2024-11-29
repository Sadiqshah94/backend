import express from 'express';
import dotenv from 'dotenv';
import router from './routes/productRoutes.js';
import cors from 'cors';

const app = express();
dotenv.config();


app.use(cors()); // CORS middleware comes first
app.use(express.json()); // Body parser (if needed)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log("Welcome to express")
    res.status(200).send('Welcome to express')
 })


app.use('/products', router);



const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server Started", PORT);
})

