const express = require("express");
const roteador = express()
const localiza = require("./controladores/localiza")
roteador.post("/votacao/:pais/:ip", localiza.criarVoto)
roteador.get("/votacao", localiza.consultarVoto)
module.exports = roteador;