
const express = require('express')
const {postVideo} = require('../controllers/videoController')
const router = express.Router()

router.post('/', postVideo)

module.exports = router