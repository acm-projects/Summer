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
const {Upload} = require("@aws-sdk/lib-storage");
const { S3Client, PutObjectCommand, GetObjectCommand,} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { random } = require('colors');
const PDFDocument = require('pdfkit');
const { default: mongoose } = require('mongoose');
const PDFExtract = require('pdf.js-extract').PDFExtract;





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

        return content;
   })
   

    const  bucketName = process.env.BUCKET_NAME 
    const bucketRegion = process.env.BUCKET_REGION
    const accessKey = process.env.ACCESS_KEY
    const secretAccessKey = process.env.SECRET_ACCESS_KEY
    // console.log(accessKey)
    const s3 = new S3Client({
        credentials: {
            accessKeyId: accessKey,
            secretAccessKey: secretAccessKey,
        },
        
        region: bucketRegion
    });
 








const postVideo = asyncHandler(async (req, res) => {

    const {URL} = req.body

    if(!URL){
        res.status(400)
        throw new Error('Please add URL')
    }
    
    
    // const bucketName = process.env.BUCKET_NAME 
    // const bucketRegion = process.env.BUCKET_REGION
    // const accessKey = process.env.ACCESS_KEY
    // const secretAccessKey = process.env.SECRET_ACCESS_KEY
    // // console.log(accessKey)
    // const s3 = new S3Client({
    //     credentials: {
    //         accessKeyId: accessKey,
    //         secretAccessKey: secretAccessKey,
    //     },
        
    //     region: bucketRegion
    // });
 


     
    const unsummarized =   await getTranscript(URL)
    //console.log(typeof unsummarized)
    const summary =   await getSummary(unsummarized) 
   // console.log(summary);
   

    ID1 = uuidv4()
    ID2 = uuidv4()

    // Create a document
    const doc = new PDFDocument({compress: false});
    const randomfilename = ID1 + ".pdf";
  
    // Pipe it's output somewhere, like to a file or HTTP response
    doc.pipe(fs.createWriteStream(randomfilename))
    .on('finish', () =>{
    })
    doc.text("" + summary)
    
    //console.log(randomfilename);
    doc.end();
  


    const params = {
        Bucket: bucketName,
        Key: randomfilename,
        Body: doc,
        ContentType: "application/pdf"
    }


    const upload = new Upload({
        client: s3,
        params: params
      });
   
      await upload.done();
    
    //attempt with PutobjectCommand object
    // const command = new PutObjectCommand(params);
    // await s3.send(command)
    
   

    //res.json({text: summary})
  
    //Create Video
    const video = await Video.create({
        URL: URL,
        TranscriptID: ID1,
        QuizID: ID2
    })
    

    res.json({text:summary});
    
    
});

const getVideo = asyncHandler(async (req, res) => {
   
    //console.log(bucketName)
    //searches through the entire database
    const videos = await Video.find({});
    //console.log(videos)
    
    for(const video of videos) {
        const getObjectParams = {
            Bucket: bucketName,
            Key: video.TranscriptID + ".pdf"

        }
       
        const command = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, command,  {expiresIn: 3600})
        video.URL = url;

    }
    res.send(videos[videos.length - 1 ].URL)
})


module.exports = {
    postVideo,
    getVideo
}
