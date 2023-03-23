
const express = require('express')
const {getVideo} = require('../controllers/videoController')
const router = express.Router()

router.post('/', getVideo)

module.exports = router