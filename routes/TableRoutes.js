const express = require('express')
const router = express.Router()
const TableController = require('../controllers/TableController')

// router.post('/tables', TableController.createTable)
router.get('/tabela_grupo_01', TableController.tabelaGrupo01)
router.get('/tabela_grupo_02', TableController.tabelaGrupo02)
router.get('/tabela_grupo_03', TableController.tabelaGrupo03)
router.get('/tabela_grupo_04', TableController.tabelaGrupo04)

module.exports = router