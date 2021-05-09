const express = require('express');

const app=express();

app.get("/", function(request,response){
    console.log(request);
    response.send("Hello");
})
app.get("/contact",function(req,res){
    res.send("Conatct me at Gmail:amitabhishek3108@gmail.com");
})

app.get("/about",function(req,res){
    res.send("Developer and coding enthusiast");
})
app.listen(3000, function(){
    console.log("Server started running.")
});

app.get("/try",function(req,res){
    res.send("Developer and coding enthusiast");
})