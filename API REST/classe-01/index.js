const express = require("express");
const app = express()
app.use(express.json())
const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];
app.get("/convidados", (req, res) => {
    const nomeConvidado = req.query.nome;
    if (nomeConvidado) {
        const verificaConvidado = {
            Mensagem: (convidados.includes(nomeConvidado) ? "Convidado presente." : "O convidado buscado não está presente na lista.")
        }
        res.send(verificaConvidado)
    }
    res.json(convidados)
})
app.post("/convidados", (req, res) => {
    const possivelConvidado = req.body.nome;
    if (convidados.includes(possivelConvidado)) {
        const verificaConvidado = {
            mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
        }
        res.send(verificaConvidado)
    }
    else {
        const verificaConvidado = {
            mensagem: "Convidado adicionado."
        }
        res.send(verificaConvidado)
        convidados.push(possivelConvidado)
    }

})
app.delete("/convidados/:nome", (req, res) => {
    if (convidados.includes(req.params.nome)) {
        const indice = convidados.indexOf(req.params.nome)
        convidados.splice(indice, 1)
        const verificaConvidado = {
            mensagem: "Convidado removido."
        }
        res.send(verificaConvidado)
    }
    else {
        const verificaConvidado = {
            mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
        }
        res.send(verificaConvidado)
    }
})

app.listen(8000)
