const express = require('express')
const router = express.Router()
const {Summarize} = require('../controllers/transcriptController')


router.post('/', Summarize)

module.exports = router