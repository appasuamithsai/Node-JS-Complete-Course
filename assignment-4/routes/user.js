const express= require("express");
const mainData=require("../routes/main");

const router=express.Router();
router.get('/user',(req,res,next)=>{
    const data=mainData.data;
    res.render('user',{users:data});
});

module.exports.router=router;


