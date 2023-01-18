const ServicoModel = require('../models/ServicoModel')

module.exports = {
    listaServicos: (req, res) => {
        const servicos = ServicoModel.index();
        //res.render('VIEW', {Objeto})
        return res.render('servicos', {listaServicos: servicos, title: "Lista de Serviços"});
        //res.send(servicos); - UTILIZADO APENAS PARA TER UM JSON DE RESPOSTA NA PAGINA
    },

    mostraAdminServicos: (req, res) => {
        res.render('admin')
    },

    criaServico: (req, res) => {
        //console.log(req.body)
        ServicoModel.createOne(req)
        res.send("O Produto/Serviço de nome "+ req.body.nome +" foi criado com Sucesso!")
    },

    buscaServico: (req, res) => {
        res.send(ServicoModel.findOne(req))
    }
}