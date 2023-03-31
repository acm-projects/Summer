const { Configuration, OpenAIApi } = require("openai");
const asyncHandler = require('express-async-handler')

const Summarize = asyncHandler( async(req, res) => {

const {transcript} = req.body

const configuration = new Configuration({
  apiKey: process.env.OpenAI_SECRET,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Summarize" + transcript,
  max_tokens: 200,
  temperature: 0,
});


})

module.exports = {
  Summarize
}

/*
fetch('https://api.openai.com/v1/engines/davinci/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer *insert api key here*`
  },
  body: JSON.stringify({
    prompt: 'Write a sad poem about my border collie, Pepper',
    max_tokens: 100
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
});
*/