const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path');
const adminData=require("./admin");

const shopController=require('../controller/shop');

router.get('/',shopController.getIndex);

router.get('/products',shopController.getProducts);

router.get('/cart',shopController.getCart);

router.get('/orders',shopController.getOrders);

router.get('/checkout',shopController.getCheckout);

router.get('/',shopController.getIndex);
  
module.exports=router;