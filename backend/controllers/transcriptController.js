const { Configuration, OpenAIApi } = require("openai");
const asyncHandler = require('express-async-handler')

const Summarize = asyncHandler( async(req, res) => {

  const {transcript} = req.body;

  if(!transcript) {
    res.status(401)
    throw new Error("Please provide a transcript to summarize")
  }

  //Check if user exists

  const configuration = new Configuration({
    apiKey: process.env.OpenAI_API_KEY
  });

  try{
  const openai = new OpenAIApi(configuration);

  openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Summarize " + transcript,
    max_tokens: 30,
    temperature: 0,
  })
  .then((response) => {
    const sumResponse = response.data.choices[0].text;
    const parseSum = sumResponse.replace(/\n/g, '');
    res.json({summary: parseSum});
    // res.json({summary: sumResponse});
    
  })
  }catch(error) {
    res.status(500)
    throw new Error('Failed Summarization');
  }


//creating a new filename in the DB
/*
 const name = new Name({
  filename: filename
 });
 
 name.save();
 */







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