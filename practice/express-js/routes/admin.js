const express=require('express');
const router=express.Router();
const rootDir=require('../util/path');

const data=[];
const path=require("path");
// /admin/add-products => GET
router.get("/add-product",(req,res,next)=>{
    res.render("add-product",{docxTitle:"Add Products",path:"/admin/add-product",activeProducts:true,ProductCSS:true,FormCSS:true});
    // res.sendFile(path.join(rootDir,"views","add-product.html"));
});
  
// /admin/add-products => POST
router.post('/add-product',(req,res,next)=>{
    data.push({name:req.body.name,price:'$'+req.body.price,description:req.body.description});
    res.redirect('/');
});

exports.router=router;
exports.data=data;