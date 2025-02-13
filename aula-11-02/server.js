const express = require("express");
const dotenv = require("dotenv");

const server = express();
// Middleware(meio termo) para permitir o uso de json
server.use(express.json());

dotenv.config();

const port = process.env.PORTA;

const banco_dados = [];

server.get("/", function(req,res){
    try {
        if (banco_dados.length === 0){
            return res.status(200).json({msg:"Não há produtos"})
        }
        return res.status(200).json(banco_dados)
    } catch (error) {
        resposta.status(500).json({msg: "Erro ao buscar produto"})
    }
});

server.listen(port, function(){
    console.log("Iniciei o servidor")
});

server.post("/", function(req,res){
    try {
        const {id, nome, preco, quantidade} = req.body
        const novoProduto = {id, nome, preco, quantidade}
        banco_dados.push(novoProduto)
        return res.status(201).json(novoProduto)
    } catch (error) {
        res.status(500).json({msg: "Erro ao cadastrar produto"})
    }
})


//Rota para editar o produto
// http://localhost:3000/1
server.put("/:id", function(req,res){
    try {
        const id  = req.params
        const produto = banco_dados.find(produto => produto.id === id)
        if(!produto){
            return res.status(404).json({msg: "Produto não encontrado"})
        }
        const {novoNome,novoPreco,novaQuantidade} = req.body;
        if(produto){
            produto.nome = novoNome
            produto.preco = novoPreco
            produto.quantidade = novaQuantidade
        }
        resposta.status(200).json(produto)
    } catch (error) {
        res.status(500).json({msg: "Erro ao atualizar produto"})
    }
})