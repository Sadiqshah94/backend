import express from 'express';

const router = express.Router();


router.get("", (req, res) => {
    res.status(200).get({status:200,message:"success",data:[]})
})

export default router;