/* istanbul ignore next */
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  require('dotenv').config();
}
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const userRoutes = require('./routes/user')
const cronRoutes = require('./routes/cron')
const errorHandler = require('./helpers/errorhandler')

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
/* istanbul ignore next */
app.use(express.json())
/* istanbul ignore next */
// mongoose.connect(`mongodb+srv://catlover:${process.env.PASS}@cluster0-trxl7.gcp.mongodb.net/final-project-${process.env.NODE_ENV ? process.env.NODE_ENV : ''}?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connect('mongodb://localhost:27017/smarthome', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(data => {
    console.log('database connected')
  }).catch(err => {
    /* istanbul ignore next */
    console.log('database error')
  })

app.use('/user', userRoutes)
app.use('/cron', cronRoutes)
app.use(errorHandler)

module.exports = app;
