const Product = require("../models/product");
 

exports.getProducts =  (req, res, next) => {
   Product.fetchAll((data)=>{
    res.render("shop/product-list", {
      prods: data,
      docxTitle: "All Products",
      path: "/products",
    })
  }
  );
};



exports.getIndex =  (req, res, next) => {
  Product.fetchAll((data)=>{
   res.render("shop/index", {
     prods: data,
     docxTitle: "Index",
     path: "/",
   })
 }
 );
};


exports.getCart =  (req, res, next) => {
   res.render("shop/cart", {
     docxTitle: "Your Cart",
     path: "/cart",
   })
 };

 exports.getCheckout=  (req, res, next) => {
  res.render("shop/orders", {
    docxTitle: "Your Orders",
    path: "/orders",
  })
};



exports.getOrders=  (req, res, next) => {
  res.render("shop/checkout", {
    docxTitle: "Check Out",
    path: "/checkout",
  })
};
