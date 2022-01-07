function senha(req, res, next) {
    if (req.method==="GET" || req.query.senha === "cubos123") {
        next()
    }
    else {
        res.status(401)
        res.json({ erro: "senha incorreta" })
    }
}
module.exports = {senha}