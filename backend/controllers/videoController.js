// @description Get the transcript
// @route GET /api/videos
// @access Public
const asyncHandler = require('express-async-handler')
const fs = require('fs');
const path = require('path');
const youtubedl = require('youtube-dl-exec');
const removeEmptyLines = require("remove-blank-lines");
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const Video = require('../models/videoModel')

const postVideo = asyncHandler(async (req, res) => {
    const {URL} = req.body

    if(!URL) {
        res.status(400)
        throw new Error('Please add URL')
    }

    const parseVtt = (subtitles) => {
        const timeStamp = /\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}/;
        const newContent = subtitles.split('\n').slice(3).join('\n');
        const noEmptyLines = removeEmptyLines(newContent.replace(/<.*?>|<\/.*?>/g, ""));
        const removeTimes = noEmptyLines.split('\n').filter(line => !timeStamp.test(line)).join('\n');
        const cleanVttFile= Array.from(new Set(removeTimes.split('\n'))).join('\n');
        const newData = cleanVttFile.replace(/\n/g, ' ');
        return newData;
    }

    // let unsummarizedTs = "";
    youtubedl(URL, {
        writeAutoSub: true,
        writeSubs: true,
        skipDownload: true,
        subLang: 'en', 
        output: 'subtitles', 
    })
    .then(() => {
        const subtitles = fs.readFileSync("subtitles.en.vtt", 'utf-8');
        const unsummarizedTs = parseVtt(subtitles);

        axios.post("http://localhost:5000/api/summarize",
        {
            transcript: unsummarizedTs 
        })
        .then((summaryResponse) => {
            axios.post("http://localhost:5000/api/quiz",
            {
                summary: unsummarizedTs 
            })
            .then((quizResponse) => {
                res.json({
                    summary: summaryResponse.data.summary,
                    quiz: quizResponse.data.quiz,
                })
            })
        })
        .catch((error) => {
            console.log('Error with Summarization')
            console.log(error.message);
        });
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error fetching subtitles');
    });

     //Create Video
     const video = await Video.create({
        URL: URL,
        TranscriptID: uuidv4(),
        QuizID: uuidv4()
    })
    /*
    if(video){
        res.status(201).json({
            URL: video.URL,
            TranscriptID: video.TranscriptID,
            QuizID: video.QuizID
            
        })
    } else{
        res.status(400)
        throw new Error('Invalid video data')
    }
    */

    
    
});

module.exports = {
    postVideo
}
