const mongoose = require('mongoose')

const nameSchema = mongoose.Schema({
    filename: {
        type: String,
        required: [true, "Please add a name for your transcript file"]
    },
    
},
{
    timestamps: true
})

module.exports = mongoose.model('Name', nameSchema)

