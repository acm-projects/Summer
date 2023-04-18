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
    // prompt: "Generate a short free-response question of the following: " + summary,
    prompt: "Generate a short quiz of 3 questions with 4 answer choices about the following text. Provide the answers at the end of each question: " + summary,
    max_tokens: 40,
    temperature: 0,
    })
    .then((response) => {

      // WARNING: the quiz generation still rarely gives out wrong answers, so I will see if the it's something on my end, like the prompt not being descriptive enough...

      const quizString =  response.data.choices[0].text
      const removeFirst = quizString.replace('\n\n', '');
      const quizArray = removeFirst.split("\n\n").map(element => element.split("\n"));

      const quizQuestionsAndAnswers = [];

      for (let i = 0; i < quizArray.length; i += 2) {

        const question = quizArray[i][0].substring(3); // remove the question number prefix
        const answer = quizArray[i + 1][0].substring(8); // remove the "Answer: " prefix

        const choices = {};
        for (let j = 1; j < quizArray[i].length; j++) {
          const letter = quizArray[i][j][0];
          const text = quizArray[i][j].substring(3);
          choices[letter] = text;
        }

        quizQuestionsAndAnswers.push({
          Question: question,
          Choices: choices,
          Answer: answer
        });
      }

      res.json({quiz: quizQuestionsAndAnswers});
      // res.json({quiz: quizString});

    });

  } catch(error) {
    res.status(500)
    throw new Error('Failed quiz generation');
  }

});

module.exports = {
  createQuiz 
}
