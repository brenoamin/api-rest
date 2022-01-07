const express = require("express");
const roteador = express()
const alunos=require("./controladores/alunos")
roteador.get("/alunos", alunos.consultarTodosOsAlunos)
roteador.get("/alunos/:idConsulta", alunos.consultarUmAluno)
roteador.post("/alunos", alunos.criarAluno)
roteador.put("/alunos/:idConsulta", alunos.substituirAluno)
roteador.patch("/alunos/:idConsulta", alunos.editarAluno)
roteador.delete("/alunos/:idConsulta", alunos.excluirAluno)
module.exports = roteador;