const express = require("express")
const fs = require('fs/promises');
const axios = require("axios");
const app = express()
app.get("/enderecos/:cep", async (req, res) => {
    const cep = req.params.cep;
    const enderecos = JSON.parse(await fs.readFile("./enderecos.json"))
    if (enderecos.find(x => x.cep.split("-").join("") === req.params.cep)) {
        res.json("Encontrou!")
    }
    else {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        res.json(resposta.data)
        enderecos.push(resposta.data)
        fs.writeFile("enderecos.json", JSON.stringify(enderecos), err => {
            if (err) {
                console.log("Deu erro!")
            }
            else {
                console.log("Arquivo escrito!")
            }
        })
    }
})
app.listen(8000);

