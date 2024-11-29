import express from 'express';
import { products } from '../utils/constant/products.js';


const router = express.Router();

router.get('', (req, res) => {
    try {
        res.status(200).send({ status:200,message:"success",data:products })
    }
    catch (error) {
        res.status(400).send({ status:400,message:error})
        
    }
})

export default router;