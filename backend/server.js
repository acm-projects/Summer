const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')    
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')




connectDB()
const app = express()
const cors = require('cors')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/videos', require('./routes/videoRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))

