const { Configuration, OpenAIApi } = require("openai");
const asyncHandler = require('express-async-handler')

/*
POST method 
API ENDPOINT: https://api.openai.com/v1/completions

*/

const createQuiz = asyncHandler( async(req, res) => {
  const {summary} = req.body;

  const configuration = new Configuration({
    apiKey: process.env.OpenAI_API_KEY
  });

  try {
    const openai = new OpenAIApi(configuration);

    openai.createCompletion ({
    model: "text-davinci-003",
    prompt: "Generate a short quiz of 3 questions with 4 answer choices about the following text: " + summary,
    max_tokens: 150,
    temperature: 0,
    })
    .then((response) => {
      //res.sendStatus(response.data.choices)
      res.json({quiz: response.data.choices[0].text});

    })

  } catch(error) {
    res.status(500)
    throw new Error('Failed quiz generation');
  }

});

module.exports = {
  createQuiz 
}
