
const express=require("express");

const bodyParser=require('body-parser');
const path=require('path');
const rootDir=require('./util/path');
const adminData=require("./routes/admin");
const shopRouter=require("./routes/shop");
// const expressHbs=require("express-handlebars"); 
const { dirname } = require("path");

const app=express();

// app.engine('hbs',expressHbs({layoutDir:'views/layouts',defaultLayout:'main-layout.hbs'}));
app.set("view engine","ejs");
// app.set("view engine","pug");
app.set("views","views");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")))
app.use("/admin",adminData.router);

app.use(shopRouter);

app.use((req,res,next)=>{
  res.status(404).render('404',{docxTitle:"Error",path:'/'});
});

app.listen(3000);



// const server = http.createServer(app);
// server.listen(3000);
