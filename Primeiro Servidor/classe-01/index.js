const pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "Porto Alegre",
    apelidos: [
        "Carlão",
        "Carlinhos",
        "Carluxo"
    ]
};

const { nome: nomedaPessoa, idade: idadeDaPessoa, ...infosAdicionais } = pessoa;
console.log(nomedaPessoa)
console.log(idadeDaPessoa)
console.log(infosAdicionais)
