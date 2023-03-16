// @description Get the transcript
// @route GET /api/videos
// @access Public
const asyncHandler = require('express-async-handler')
const fs = require('fs');
const path = require('path');

function removeHeader(content) {
    // Use regex to match and remove header
    const headerRegex = /^WEBVTT\s+Kind:\s+captions\s+Language:\s+\w+\s+/;
    return content.replace(headerRegex, '');
  }

const getVideo = asyncHandler(async (req, res) => {
    const {URL} = req.body

    //Check if user exists
    if(!URL){
        res.status(400)
        throw new Error('Please add all fields')
    }

    
youtubedl(URL, {
        writeSubs: true,
        skipDownload: true,
        subLang: 'en', 
        output: 'subtitles', // specify the name of the subtitles file
    }).then(() => {
        // res.setHeader('Content-Type', 'text/vtt');
        const subtitles = fs.readFileSync("subtitles.en.vtt", 'utf-8');
        const cleanVttFile = removeHeader(subtitles).replace(/\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}\n/g, '').replace(/\n/g, ' ');
        fs.writeFileSync("subtitles.en.vtt", cleanVttFile);
        res.send(cleanVttFile);


    }).catch((err) => {
        console.error(err);
        res.status(500).send('Error fetching subtitles');
    });

});

module.exports = {
    getVideo,
}
