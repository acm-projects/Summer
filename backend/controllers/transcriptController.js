const { Configuration, OpenAIApi } = require("openai");
const asyncHandler = require('express-async-handler')
/*
POST method 
API ENDPOINT: /api/summarize
Public Access

*/
const Summarize = asyncHandler(async(req, res) => {

const {transcript} = req.body;

if(!transcript){
  res.status(400)
  throw new Error("Please provide a transcript to summarize")
}


const configuration = new Configuration({
  apiKey: process.env.OpenAI_API_KEY
});
const openai = new OpenAIApi(configuration);
console.log(transcript);

  openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Summarize" + transcript,
  max_tokens: 150,
  temperature: 0,
})
.then((response) => {
  res.send(response.data.choices);
});

});

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