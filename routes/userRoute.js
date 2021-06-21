const mongoose = require('mongoose'); // Erase if already required
const express = require('express')
const router  = express.Router();
const User = require('../models/userModel');


router.post('/login', function (req, res) {
    User.find({email : req.body.email,password:req.body.password},(err,docs)=>{


if(docs.length>0){


const user = {
name: docs[0].name,
_id: docs[0]._id,
email: docs[0].email,

}
res.send(user)


}

else{
  return res.status(400).json({message:'ivalid creaidtailas'});

}


    })

})
router.post('/register', function (req, res) {



User.find({email : req.body.email}, (err,docs)=>{

if(docs.length>0){

    return res.status(400).json({messaeg:'something went wrong'});
}

else{

    const newuser = new User({

        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
        
            })
        
            newuser.save(err=>{
        
        if(!err){
        res.send('user registered succes')
        
        }
        
        else{
            res.send(err)
            
            }
            
        
        
            })
        
    
}

if(err){
return res.status(400).json({messaeg:'something went wrong'});
}



})



    



})

module.exports = router