const express = require('express')
const router = express.Router()
const TableController = require('../controllers/TableController')

router.post('/tables', TableController.createTable)
router.get('/tabela_grupo_01', TableController.tabelaGrupo01)
router.get('/tabela_grupo_02', TableController.tabelaGrupo02)

module.exports = router