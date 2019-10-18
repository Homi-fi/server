/* istanbul ignore next */
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    require('dotenv').config();
}
const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan')
const routes = require('./routes/user')
const errorHandler = require('./helpers/errorhandler')
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
/* istanbul ignore next */
app.use(express.json())
/* istanbul ignore next */
mongoose.connect(`mongodb+srv://catlover:${process.env.PASS}@cluster0-trxl7.gcp.mongodb.net/final-project-${process.env.NODE_ENV ? process.env.NODE_ENV : ''}?retryWrites=true&w=majority`, {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true})
.then(data => {
    console.log('success')
}).catch(err => {
    /* istanbul ignore next */
    console.log('error')
})
app.use('/user', routes)
app.use(errorHandler)

module.exports = app;
