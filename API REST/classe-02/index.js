const express = require("express");
const app = express()
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];
let novoid = 3;
app.get("/livros", (req, res) => {
    res.send(livros)
})
app.get("/livros/:idConsultar", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.idConsultar))
    if (isNaN(req.params.idConsultar) || req.params.idConsultar === undefined) {
        const verificaID = {
            mensagem: "O valor do parâmetro ID da URL não é um número válido."
        }
        res.send(verificaID)
    }
    if (livro) {
        res.send(livro)
    }
    else {
        const verificaID = {
            mensagem: "Não existe livro para o ID informado."
        }
        res.send(verificaID)
    }
})

app.post("/livros", (req, res) => {
    const novoLivro = {
        "id": novoid,
        "titulo": req.body.titulo,
        "autor": req.body.autor,
        "ano": req.body.ano,
        "numPaginas": req.body.numPaginas
    }
    livros.push(novoLivro)
    novoid += 1;
    res.send(novoLivro)
})
app.put("/livros/:idConsultar", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.idConsultar))
    if (livro) {
        livro.titulo = req.body.titulo;
        livro.autor = req.body.autor;
        livro.ano = req.body.ano;
        livro.numPaginas = req.body.numPaginas;
        const verificaLivro = {
            mensagem: "Livro substituído."
        }
        res.json(verificaLivro)
    }
    else {
        const verificaLivro = {
            mensagem: "Não existe livro a ser substituído para o ID informado."
        }
        res.json(verificaLivro)
    }
})
app.patch("/livros/:idConsultar", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.idConsultar))
    if (req.body.titulo !== undefined) {
        livro.titulo = req.body.titulo
    }
    if (req.body.autor !== undefined) {
        livro.autor = req.body.autor
    }
    if (req.body.ano !== undefined) {
        livro.ano = req.body.ano
    }
    if (req.body.titulo !== undefined) {
        livro.numPaginas = req.body.numPaginas
    }
    const alteraLivro = {
        mensagem: livro ? "Livro alterado." : "Não existe livro a ser alterado para o ID informado."
    }
    res.send(alteraLivro)
})
app.delete("/livros/:idConsultar", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.idConsultar))
    const indice = livros.indexOf(livro)

    if (livro) {
        livros.splice(indice, 1)
        const removeLivro = {
            mensagem: "Livro removido."
        }
        res.json(removeLivro)
    }
    else {
        const removeLivro = {
            mensagem: "Não existe livro a ser removido para o ID informado."
        }
        res.json(removeLivro)
    }
})

app.listen(8000);

