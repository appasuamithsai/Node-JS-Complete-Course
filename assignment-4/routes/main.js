const express = require("express");
const router = express.Router();
const data = [];

router.get("/",(req, res, next) => {
  res.render("main");
});
router.post("/add-user",(req, res, next) => {
  data.push({
    name: req.body.name,
  });
  res.redirect("/user");
});
module.exports.router = router;
module.exports.data = data;
