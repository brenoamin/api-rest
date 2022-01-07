const express = require("express");
const app = express();
const roteador = require("./roteador")
app.use(express.json())

app.use(roteador);
app.listen(8000)