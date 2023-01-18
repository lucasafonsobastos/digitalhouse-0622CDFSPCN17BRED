const ServicoModel = require('../models/ServicoModel')

module.exports = {
    listaServicos: (req, res) => {
        const servicos = ServicoModel.index();
        //res.render('VIEW', {Objeto})
<<<<<<< HEAD
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
=======
        return res.render('servicos', {
            listaServicos: servicos,
            title: "Lista de Serviços",
            css: ['style copy.css']
        })
>>>>>>> 7fde47d7594c9c3efb7184314016bd0b6d53c9e3
    }
}