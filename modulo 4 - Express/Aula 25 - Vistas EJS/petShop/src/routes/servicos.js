const express = require('express');
const router = express.Router();

const ServicosController = require('../controller/servicosController')

router.get('/', ServicosController.listaServicos);

router.get('/admin', ServicosController.mostraAdminServicos);

router.post('/create', ServicosController.criaServico);

router.get('/search', ServicosController.buscaServico);

module.exports = router;