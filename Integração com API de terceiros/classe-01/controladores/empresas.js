const instanciaAxios = require("../servicos/company")
const fs = require('fs/promises');
const consultarEmpresa = async (req, res) => {
    const dominio = req.params.dominioEmpresa;
    try {
        const resposta = await instanciaAxios.get('',
            {
                params:
                {
                    domain: dominio
                }
            });
            if(!resposta.data.name){
                return res.status(400).json({
                    erro:"O campo nome é obrigatório!"
                })
            }
            const empresas = JSON.parse(await fs.readFile("./controladores/empresas.json"))
            if (empresas.find(x => x.domain === req.params.dominioEmpresa)) {
                res.json("Encontrou!")
            }
            else {
                res.json(resposta.data)
                empresas.push(resposta.data)
                fs.writeFile("./controladores/empresas.json", JSON.stringify(empresas), err => {
                    if (err) {
                        console.log("Deu erro!")
                    }
                    else {
                        console.log("Arquivo escrito!")
                    }
                })
            }
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = {
    consultarEmpresa
}
