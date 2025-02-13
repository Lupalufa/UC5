const express = require("express")
const dotenv = require("dotenv")
const server = express()

dotenv.config()

const port = process.env.PORTA

const banco_dados = [];

const nunjucks = require("nunjucks")
nunjucks.configure("./",{
    express: server
})

server.get("/aluno", function(req,res){
    return res.json(banco_dados)
})

server.listen(3000, function(){
    console.log("iniciei o servidor")
})