import express from 'express';
import router from './routes/productRoutes.js';

const app = express();

app.use('/products', router);

app.listen(5000, () => {
    console.log('I AM LISTENING!')
})
