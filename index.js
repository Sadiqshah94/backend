import express from 'express';
import router from './routes/productRoutes.js';

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send('HELLO WORLD')
})

app.use('/products', router);

app.listen(5000, () => {
    console.log('I AM LISTENING!')
})
