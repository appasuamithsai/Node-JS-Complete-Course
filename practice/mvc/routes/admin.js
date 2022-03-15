const express=require('express');
const router=express.Router();
const rootDir=require('../util/path');
const adminController=require('../controller/admin');
const data=[];
const path=require("path");
// /admin/add-products => GET
router.get("/add-product",adminController.getAddProducts);
  

router.get('/products',adminController.getProducts);



// /admin/add-products => POST
router.post('/add-product',adminController.postAddProducts);

exports.router=router;
exports.data=data;