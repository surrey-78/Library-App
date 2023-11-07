require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const cors = require('cors')

const mongoose = require('mongoose')
const bookRouter = require('./routes/bookRoute')

mongoose.connect(process.env.DB_URL)

app.use(cors())
app.use(express.json())
const db = mongoose.connection
db.on('error',(errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully'))

app.use('/api/v1/books',bookRouter) 

app.listen(PORT,
    console.log(`Started Server running at https://localhost:${PORT}/api/v1/books/`));