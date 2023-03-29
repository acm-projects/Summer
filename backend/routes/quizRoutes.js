const express = require('express')
const router = express.Router()
const {createQuiz} = require('../controllers/quizController')


router.post('/', createQuiz)

module.exports = router