const express=require('express');
const path=require('path');

const mainRouter=require('./routes/main');
const userRouter=require('./routes/users');

const app=express();

app.use(express.static(path.join(__dirname,"public")));


app.use(userRouter);
app.use(mainRouter);


app.listen(3002);