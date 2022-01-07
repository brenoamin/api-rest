const alunos =require("../dados/alunos")
const cursos=require("../dados/cursos")
function consultarTodosOsAlunos(req,res){
    res.json(alunos)
}
function consultarUmAluno(req,res){
    const aluno = alunos.find(aluno => aluno.id == Number(req.params.idConsulta))
    if (isNaN(req.params.idConsulta)) {
        res.status(400)
        res.json({mensagem:"O ID deve ser um número válido"})
        return;

    }
    if (!aluno) {
        res.status(404)
        res.json({mensagem: "Não existe aluno para o ID informado."})
        return;
        
    }
    res.send(aluno)
}
function tratarAluno(aluno){

if(!aluno.nome){
    return "O campo nome é obrigatório."
}
if(!aluno.sobrenome){
    return "O campo sobrenome é obrigatório"
    
}
if(!aluno.idade){
    return "O campo idade é obrigatório"
}
if(!aluno.curso){
    return "O campo curso é obrigatório"  
}
if(typeof aluno.nome!=="string"){
    return "O campo nome deve ser preenchido com um texto."
  
}
if(typeof aluno.sobrenome!=="string"){
    return "O campo sobrenome deve ser preenchido com um texto."  
}
if(typeof aluno.idade!=="number"){
    return "O campo nome deve ser preenchido com um número."  
}
if(typeof aluno.curso!=="string"){
    return "O campo curso deve ser preenchido com um texto."
}
if(aluno.idade<18){
    return "O aluno deve ser maior de idade." 
}
if(!cursos.includes(aluno.curso)){
    return "O aluno não pertence a um dos cursos válidos."
}
}
let novoId=1;
function criarAluno(req,res){
    const erro=tratarAluno(req.body);
    if(erro){
        res.status(400);
        res.json({erro});
        return;
    }
    const novoAluno = {
        "id":novoId,
        "nome": req.body.nome,
        "sobrenome": req.body.sobrenome,
        "idade": req.body.idade,
        "curso": req.body.curso
    }
    alunos.push(novoAluno)
    novoId+=1;
    res.status(201)
    res.json()
}
function editarAluno(req,res){
    const aluno = alunos.find(aluno => aluno.id == Number(req.params.idConsulta))
    if (!aluno) {
        res.status(404)
        res.json({mensagem: "Não existe aluno para o ID informado."})
        return;   
    }
    const erro=tratarAluno({
        nome:req.body.nome || aluno.nome,
        sobrenome:req.body.sobrenome || aluno.sobrenome,
        idade:req.body.idade || aluno.idade,
        curso:req.body.curso || aluno.curso,
    });
    if(erro){
        res.status(400);
        res.json({erro});
        return;
    }
    if (req.body.nome !== undefined) {
        aluno.nome = req.body.nome
    }
    if (req.body.sobrenome !== undefined) {
        aluno.sobrenome = req.body.sobrenome
    }
    if (req.body.idade !== undefined) {
        aluno.idade = req.body.idade
    }
    if (req.body.curso !== undefined) {
        aluno.curso = req.body.curso
    }
    res.json(aluno);
}
function substituirAluno(req,res){
    const aluno = alunos.find(aluno => aluno.id == Number(req.params.idConsulta))
    const erro=tratarAluno(req.body);
    if(erro){
        res.status(400);
        res.json({erro});
        return;
    }
    if(req.body.id!==Number(req.params.idConsulta)){
        res.status(400);
        res.json({erro:"O campo id deve ser igual na rota e no body da."})
        return;
    }
    if(aluno){
        aluno.nome=req.body.nome;
        aluno.sobrenome=req.body.sobrenome;
        aluno.idade=req.body.idade;
        aluno.curso=req.body.curso
        res.json(aluno)
    }
    else{
        const novoAluno=req.body;
        alunos.push(aluno)
        res.json(novoAluno)
    }
}
function excluirAluno(req,res){
    const aluno = alunos.find(aluno => aluno.id == Number(req.params.idConsulta))
    const indice = alunos.indexOf(aluno)
    if (isNaN(req.params.idConsulta)) {
        res.status(400)
        res.json({mensagem:"O ID deve ser um número válido"})
    }
    if (aluno) {
        alunos.splice(indice, 1)
        res.json(aluno)
    }
    else {
        res.status(404)
        res.json({mensagem: "Não existe aluno a ser removido para o ID informado."})
    }
}
module.exports={
    consultarTodosOsAlunos,
    consultarUmAluno,
    criarAluno,
    excluirAluno,
    editarAluno,
    substituirAluno
}