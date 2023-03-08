const express = require('express');
const app = express();
const youtubedl = require('youtube-dl-exec');
const fs = require('fs');

const URL = "PLACE A YOUTUBE URL YOU WANT HERE FOR NOW"
const SUBTITLES_FILE = 'subtitles'; // file name

app.get('/', (req, res) => {
    youtubedl(URL, {
        writeSubs: true,
        skipDownload: true,
        subLang: 'en', // specify the language of the subtitles
        output: SUBTITLES_FILE, // specify the name of the subtitles file
    }).then(() => {
        const subtitles = fs.readFileSync(`${SUBTITLES_FILE}.en.vtt`, 'utf-8');
        res.setHeader('Content-Type', 'text/vtt');
        res.send(subtitles);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Error fetching subtitles');
    });
});

app.listen(5000, () => {
    console.log('Listening on port 5000');
});
