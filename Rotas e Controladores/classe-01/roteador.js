const express = require("express");
const controladorImovel = require("./controladores/imoveis")
const roteador = express();
roteador.get("/imoveis", controladorImovel.get)
roteador.get("/imoveis/:idConsulta", controladorImovel.getporId)
module.exports = roteador;