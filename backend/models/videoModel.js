const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({
    URL: {
        type: String,
        required: [true, "Needs a video URL"]
    },
    TranscriptID:{
        type: String,
        required: [true, "Needs a transcript ID"]
    },
    QuizID:{
        type: String,
        required: [true, "Needs a quiz ID"]
    }

    
},
{
    timestamps: true
})

module.exports = mongoose.model('Video', videoSchema)

