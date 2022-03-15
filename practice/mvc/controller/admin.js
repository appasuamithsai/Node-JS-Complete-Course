const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    docxTitle: "Add Products",
    path: "/admin/add-product",
    activeProducts: true,
    ProductCSS: true,
    FormCSS: true,
  });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(
    req.body.name,
    req.body.imageUrl,
    req.body.price,
    req.body.description
  );
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((data) => {
    res.render("admin/products", {
      prods: data,
      docxTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
