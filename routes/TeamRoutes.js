const express = require('express')
const router = express.Router()
const TeamController = require('../controllers/TeamController')

router.post('/teams', TeamController.createTeam)
router.get('/equipes', TeamController.equipes)

module.exports = router