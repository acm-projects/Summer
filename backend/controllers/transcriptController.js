const { Configuration, OpenAIApi } = require("openai");
const asyncHandler = require('express-async-handler')
const Name = require('../models/nameModel')
/*
POST method 
API ENDPOINT: /api/summarize
Public Access

*/
const Summarize = asyncHandler(async(req, res) => {

const {transcript} = req.body;

const {filename} = req.body;

if(!transcript || !filename){
  res.status(400)
  throw new Error("Please provide a transcript to summarize")
}


//Check if user exists
const nameExists = await Name.findOne({filename})

if(nameExists){
    res.status(400)
    throw new Error('Filename already exists')
}


const configuration = new Configuration({
  apiKey: process.env.OpenAI_API_KEY
});
const openai = new OpenAIApi(configuration);

  openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Summarize" + transcript,
  max_tokens: 50,
  temperature: 0,
})
.then((response) => {
  res.send(response.data.choices);
  //const output = response[0].text;
  //console.log(output);
});


//creating a new filename in the DB
 const name = new Name({
  filename: filename
 });
 
 name.save();






//console.log(response[0].text);
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