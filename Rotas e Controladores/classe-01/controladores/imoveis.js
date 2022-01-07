const imoveis = require("../dados/imoveis")
function get(req, res) {
    res.json(imoveis)
}
function getporId(req,res){
    const imovel = imoveis.find(imovel => imovel.id === Number(req.params.idConsulta))
    if (!imovel) {
        res.status(404);
        res.json({ erro: "Imovel " + req.params.idConsulta + " não existe." })
        return;
    }
    res.json(imovel)
}
module.exports = { get, 
    getporId }