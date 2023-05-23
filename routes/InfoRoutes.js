const express = require('express')
const router = express.Router()
const InfoController = require('../controllers/InfoController')

// router.post('/infos', InfoController.createInfo)
router.get('/infos', InfoController.infos)

module.exports = router
