const express = require("express")
const app = express()
app.get("/somar", (req, res) => {
    let numero1 = req.query.num1;
    let numero2 = req.query.num2;
    if (numero1 === undefined || numero2 === undefined) {
        res.status(404)
        res.send("Digite um ou mais valores como parâmetro!")

    }
    else {
        numero1 = Number(numero1);
        numero2 = Number(numero2);
    }
    res.send((numero1 + numero2).toString())
})
app.get("/subtrair", (req, res) => {
    let numero1 = req.query.num1;
    let numero2 = req.query.num2;
    if (numero1 === undefined || numero2 === undefined) {
        res.status(404)
        res.send("Digite um ou mais valores como parâmetro!")

    }
    else {
        numero1 = Number(numero1);
        numero2 = Number(numero2);
    }
    res.send((numero1 - numero2).toString())
})
app.get("/multiplicar", (req, res) => {
    let numero1 = req.query.num1;
    let numero2 = req.query.num2;
    if (numero1 === undefined || numero2 === undefined) {
        res.status(404)
        res.send("Digite um ou mais valores como parâmetro!")
    }
    else {
        numero1 = Number(numero1);
        numero2 = Number(numero2);
    }
    res.send((numero1*numero2).toString())
})
app.get("/dividir", (req, res) => {
    let numero1 = req.query.num1;
    let numero2 = req.query.num2;
    if (numero1 === undefined || numero2 === undefined) {
        res.status(404)
        res.send("Digite um ou mais valores como parâmetro!")

    }
    else {
        numero1 = Number(numero1);
        numero2 = Number(numero2);
    }
    res.send((numero1/numero2).toString())
})
app.listen(8000);