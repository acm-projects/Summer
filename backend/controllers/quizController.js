const { Configuration, OpenAIApi } = require("openai");
const asyncHandler = require('express-async-handler')
/*
POST method 
API ENDPOINT: https://api.openai.com/v1/completions


*/
const createQuiz = asyncHandler( async(req, res) => {
  // const {text} = req.body;

const configuration = new Configuration({
  apiKey: process.env.OpenAI_SECRET,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Consisting of 2 multiple-choice questions with 4 answer choices each, generate a quiz based off of the following text: " + transcript,
  max_tokens: 7,
  temperature: 0,
});


})

module.exports = {
  createQuiz 
}
