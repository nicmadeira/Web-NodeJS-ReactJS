const expressoSul = require('express');

const vizu = expressoSul();

vizu.use(expressoSul.json());

vizu.get('/dadosPessoais', (req,res) => {
    res.send( {nome: 'Nicolas Nóbrega Madeira', idade: 19, email: 'nicolasnobre@gmail.com', profissao: 'estagiario'} );
});

vizu.get('/formacao', (req,res) => {
    res.send( {faculdade: 'UNIP - Ciencias da Computação', cursoTecnico: 'Técnico de redes - Etec', ensino: 'Ensino médio completo'} );
});

vizu.get('/projetos', (req, res) => {
    res.send({projetosAtual: 'CRUD em DART/Flutter, Sistema com inteligencia artificial', projetosAntigos: 'sistema de criação de cupons, site meio ambiente, criptografia e leitura de excel em java'});
});

vizu.get('/experiencias', (req, res) => {
    res.send({empregoAtual: 'Estagiario na SkyOne Solutions'});
});

vizu.get('/lazer', (req,res) => {
    res.send({lazer: 'estudar, jogar, programar e ver memes'})
});

vizu.post('/cadastrarCliente', (req,res) => {
    const {nome, telefone, idade, profissao, email} = req.body;

    res.send("Seu nome: " + nome + "\nSeu telefone: " + telefone + "\nSua idade: " + idade + "\nSua Profissão: " + profissao + " e seu Email: " + email);
});

vizu.put('/alterarCliente/:cod', (req,res) => {
    const {cod} = req.params;

    const{nome, telefone, idade, profissao, email} = req.body;

    res.send('Seu cadastro foi atualizado!! '+ cod + "\nNome: " + nome + "\nE-mail: " + email);
});

vizu.delete('/deletarCliente/:cod', (req,res) => {
    const {cod} = req.params;

    res.send("Seu cadastro foi excluido com sucesso: " + cod);

    console.log(cod);
});

vizu.listen(5656, () => {
    console.log("RODANDO....")
}); 