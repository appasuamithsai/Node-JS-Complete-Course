const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path');
const adminData=require("./admin");


router.get('/',(req,res,next)=>{
    const product=adminData.data;
    res.render('shop',{prods:product,docxTitle:"shop",path:'/',hasProducts:product.length >0,ProductCSS:true,activeShop:true});
    // console.log(adminData.data);
    // res.sendFile(path.join(rootDir,"views","shop.html"));
});
  
module.exports=router;