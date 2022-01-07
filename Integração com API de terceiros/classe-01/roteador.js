const express = require("express")
const empresas = require("./controladores/empresas")
const roteador = express()
roteador.get("/empresas/:dominioEmpresa", empresas.consultarEmpresa)

module.exports = roteador;
