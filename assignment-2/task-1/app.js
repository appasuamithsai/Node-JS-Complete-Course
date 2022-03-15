const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("First Middle Ware");
    next();
});
app.use((req,res,next)=>{
    console.log('Second Midlle Ware');
    res.send("<h2>Hello From Express!!!...</h2>");
});

app.listen(3001);