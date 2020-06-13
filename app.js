const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/scr/index.html")
});

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/scr/sobre.html");
});

app.get("/blog", function(rew, res){
    res.send("Bem Vindo ao blog!");
});

app.get("/ola/:nome/:cargo/:cor",function(req, res){
    res.send("<h1>Ola: "+req.params.nome+"</h1>"+"<h2>Seu cargo e: "+req.params.cargo+"</h2>"+"<h2>Sua cor favorita e: "+req.params.cor+"</h2");
})

app.listen(3344, function(req, res){
    console.log("Servidor rodando na url http://localhost:3344");
});