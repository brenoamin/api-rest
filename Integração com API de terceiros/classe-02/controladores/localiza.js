const instancia = require("../servicos/localizar")
const fs = require('fs/promises');

const criarVoto = async (req, res) => {
    const paisUsuario = req.params.pais;
    const ipUsuario = req.params.ip;
    const voto = req.body.voto;
    try {
        const resposta = await instancia.get('', {
            params:
            {
                ip_address: ipUsuario
            }
        })
        if (ipUsuario !== resposta.data.ip_address) {
            return res.status(400).json(
                {
                    erro: 'IP não coincide com o IP de voto!'
                })
        }
        if (resposta.data) {
            if (paisUsuario === resposta.data.country) {
                const votos = JSON.parse(await fs.readFile("./controladores/votos.json"))
                if (votos.find(x => x.ip === req.params.ip)) {
                    res.json("O voto já foi computado antes!")
                }
                else {
                    res.json(resposta.data)
                    votos.push({
                        voto: voto,
                        ip: ipUsuario
                    })
                    fs.writeFile("./controladores/votos.json", JSON.stringify(votos), err => {
                        if (err) {
                            console.log("Deu erro!")
                        }
                        else {
                            console.log("Arquivo escrito!")
                        }
                    })
                }
            }
            else {
                return res.status(400).json(
                    {
                        erro: 'O país não coincide com o país de voto!'
                    })
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}
const consultarVoto = async (req, res) => {
    const votos = JSON.parse(await fs.readFile("./controladores/votos.json"))
    res.json(votos)
}
module.exports = {
    criarVoto,
    consultarVoto
}