// @description Get the transcript
// @route GET /api/videos
// @access Public
const asyncHandler = require('express-async-handler')
const fs = require('fs');
const path = require('path');
const youtubedl = require('youtube-dl-exec');
const removeEmptyLines = require("remove-blank-lines");
const axios = require('axios');
const qs = require('qs');

const postVideo = asyncHandler(async (req, res) => {
    const {URL} = req.body

    if(!URL){
        res.status(400)
        throw new Error('Please add URL')
    }

    function parseVtt(subtitles) {
        const timeStamp = /\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}/;
        const newContent = subtitles.split('\n').slice(3).join('\n');
        const noEmptyLines = removeEmptyLines(newContent.replace(/<.*?>|<\/.*?>/g, ""));
        const removeTimes = noEmptyLines.split('\n').filter(line => !timeStamp.test(line)).join('\n');
        // const fileContents = cleanVttFile.replace(/^.*align:start position:0%.*$/gm, ''); // only works with auto-subs
        const cleanVttFile= Array.from(new Set(removeTimes.split('\n'))).join('\n');
        const newData = cleanVttFile.replace(/\n/g, ' ');
        // res.json({"summary": newData});
        return newData;
    }

    let result = "";
    youtubedl(URL, {
        writeAutoSub: true,
        writeSubs: true,
        skipDownload: true,
        subLang: 'en', 
        output: 'subtitles', 
    }).then(() => {
        const subtitles = fs.readFileSync("subtitles.en.vtt", 'utf-8');
        result = parseVtt(subtitles);
        console.log(result);
        axios.post("http://localhost:5000/api/summarize",
        {
            transcript: result
        }

        )
        .then((response) => {
            res.json({result: response.data.summary});
        })
        .catch((error) => {
            console.log('daher error')
            console.log(error.message);
        });
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Error fetching subtitles');
    });

    
    
});

module.exports = {
    postVideo
}