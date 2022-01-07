const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const express = require('express')
const app = express()
let contador = 0;
app.get("/", (req, res) => {
    if (contador < jogadores.length - 1) {
        res.send(`É a vez de ${jogadores[contador]} jogar!`)
    }
    else {
        res.send(`É a vez de ${jogadores[jogadores.length - 1]} jogar!`)
        contador = 0;
        res.send(`${jogadores[contador]}`)
    }
    contador++;
})
app.get("/remover", (req, res) => {
    const indiceRemover = Number(req.query.indice);
    if (indiceRemover > jogadores.length - 1) {
        res.send(`Não existe jogador no índice informado ${indiceRemover} para ser removido.
        `)
    }
    else {
        jogadores.splice(indiceRemover, 1)

    }
    res.send(jogadores)
})
app.get("/adicionar", (req, res) => {
    let newPlayer = req.query.nome;
    if(req.query.nome===undefined){
        res.send("Insira o nome do player a ser adicionado!")
    }
    else{
    newPlayer = req.query.nome[0].toUpperCase() + req.query.nome.slice(1)
    let indiceAdicionar = req.query.indice
    if (indiceAdicionar === undefined) {
        jogadores.push(newPlayer)
    }
    else {
        indiceAdicionar = Number(indiceAdicionar);
        if (Number(indiceAdicionar) > jogadores.length - 1) {
            res.send(`O índice informado ${indiceAdicionar} não existe no array. Novo jogador não adicionado.
            `)
        }
        else {
            jogadores.splice(Number(indiceAdicionar), 0, newPlayer)
        }
    }
}
    res.send(jogadores)
})
app.listen(8000)