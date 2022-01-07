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
app.listen(8000)