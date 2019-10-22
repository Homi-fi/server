const express = require('express')
const router = express.Router()
const cronController = require('../controllers/cron')

router.get('/', (req, res) => res.status(200).json({ message: 'Cron route connected' }))
router.get('/lamp/:time', cronController.Lamp)

module.exports = router