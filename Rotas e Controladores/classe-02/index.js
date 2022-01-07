const express = require("express")
const app = express()
const alunos=require("./dados/alunos")
const roteador=require("./roteador")
const {senha} = require("./intermediarios")
app.use(senha)
app.use(express.json())
app.use(roteador)
app.listen(8000);