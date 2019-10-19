const express = require('express')
const router = express.Router()
const cronController = require('../controllers/cron')

// router.get('/qr', cronController.qr)
router.get('/:time', cronController.Lamp1)

module.exports = router