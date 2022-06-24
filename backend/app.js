const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan')//logger
const cors = require('cors')
 
app.set('port',(process.env.PORT || 8081))
 
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
 
app.use(cors())
 
app.use('/api',api)
app.use(express.static('static'))
 
app.use(morgan('dev'))
 
app.use(function(req,res){
    const err = new Error('Not Found')
    err.status=404
    res.json(err)
})
 
//MONGO 
const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/Bank2', {useNewUrlParser: true})
 
const db =mongoose.connection
db.on('error',console.error.bind(console,'connection errors:'))
db.once('open',function(){
    console.log('Connected to MongoDB')
 
    app.listen(app.get('port'),function(){
        console.log('API Server Listening on Port ' + app.get('port')+ '!')
    })
})