const express = require('express')
const router = express.Router()
const GameController = require('../controllers/GameController')

router.post('/games', GameController.createGame)
router.get('/primeira_rodada', GameController.primeiraRodada)
router.get('/segunda_rodada', GameController.segundaRodada)

module.exports = router