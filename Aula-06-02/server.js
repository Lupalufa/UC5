const express = require("express")
const server = express()

const nunjucks = require("nunjucks")
nunjucks.configure("./",{
    express: server
})

server.get("/", function(req,res){
    return res.render("principal.html",)
})

server.get("/aluno", function(req,res){
    return res.render("aluno.html",)
})

server.get("/professor", function(req,res){
    return res.render("professor.html",)
})

server.listen(3000, function(){
    console.log("iniciei o servidor")
})