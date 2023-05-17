const express = require('express')
const router = express.Router()
const GameController = require('../controllers/GameController')

// router.post('/games', GameController.createGame)
router.get('/primeira_rodada', GameController.primeiraRodada)
router.get('/segunda_rodada', GameController.segundaRodada)
router.get('/terceira_rodada', GameController.terceiraRodada)
router.get('/quartas', GameController.quartas)
router.get('/semi_finais', GameController.semiFinais)
router.get('/final', GameController.final)

module.exports = router