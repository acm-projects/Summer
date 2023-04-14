
const express = require('express')
const {postVideo} = require('../controllers/videoController')
const {getVideo} = require('../controllers/videoController')
const {getVideoURL} = require('../controllers/videoController')

const router = express.Router()

router.post('/', postVideo)
router.get('/', getVideo)
router.get('/url', getVideoURL)

module.exports = router