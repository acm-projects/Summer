// @description Get the transcript
// @route GET /api/videos
// @access Public
const asyncHandler = require('express-async-handler')
const fs = require('fs');
const path = require('path');
const youtubedl = require('youtube-dl-exec');
const removeEmptyLines = require("remove-blank-lines");

const getVideo = asyncHandler(async (req, res) => {
    const {URL} = req.body

    if(!URL){
        res.status(400)
        throw new Error('Please add URL')
    }

    youtubedl(URL, {
        writeAutoSub: true,
        writeSubs: true,
        skipDownload: true,
        subLang: 'en', 
        output: 'subtitles', 
    }).then(() => {
        res.setHeader('Content-Type', 'text/vtt');
        const timeStamp = /\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}/;
        const subtitles = fs.readFileSync("subtitles.en.vtt", 'utf-8');
        const newContent = subtitles.split('\n').slice(3).join('\n');
        const noEmptyLines = removeEmptyLines(newContent.replace(/<.*?>|<\/.*?>/g, ""));
        const fileContents = noEmptyLines.split('\n').filter(line => !timeStamp.test(line)).join('\n');
        // const fileContents = cleanVttFile.replace(/^.*align:start position:0%.*$/gm, ''); // only works with auto-subs
        const cleanVttFile= Array.from(new Set(fileContents.split('\n'))).join('\n');
        const newData = cleanVttFile.replace(/\n/g, ' ');
        fs.writeFileSync("subtitles.en.vtt", newData);
        res.send(newData);


    }).catch((err) => {
        console.error(err);
        res.status(500).send('Error fetching subtitles');
    });

});

module.exports = {
    getVideo
}
