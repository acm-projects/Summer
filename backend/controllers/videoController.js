
// @description Get the transcript
//@route GET /api/videos
//@access Public
const getVideo = asyncHandler(async (req, res) => {
const SUBTITLES_FILE = 'subtitles'; // file name

    const {URL} = req.body

    //Check if user exists
    if(!URL){
        res.status(400)
        throw new Error('Please add all fields')
    }


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

})