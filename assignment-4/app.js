const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine",'pug');
app.set('views','views');
const userRouter=require('./routes/user');
const mainData=require('./routes/main');



app.use(userRouter.router);

app.use(mainData.router);
app.listen(3002);