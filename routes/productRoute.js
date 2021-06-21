
const express = require('express')
const router  = express.Router();
const product = require('../models/productmodel')



router.get('/getAllPorducts', function (req, res) {

    product.find({},(err,docs)=>{

if(!err){
return res.send(docs);

}

if(err){
    return res.status(400).json({'message':'somwthing went wrong'});
    
    }

    })


})

module.exports = router