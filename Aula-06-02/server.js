const express = require("express")
const server = express()


server.get("/", function(req,res){
    return res.send("Página Principal")
})

server.get("/aluno", function(req,res){
    return res.send("Aluno")
})

server.get("/professor", function(req,res){
    return res.send("Professor")
})

server.listen(3000, function(){
    console.log("iniciei o servidor")
})