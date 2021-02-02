const express = require('express')
const app = express()
const {models: {Actor,Movie,Role}} = require('./db')

module.exports = app

app.get('/',(req,res,next)=>{
    res.send(`
    <html>
    <body>
    Hello World
    </body>
    </html>
    `)
})

app.get('/api/actors',async(req,res,next)=>{
    try{
        res.send(await Actor.findAll())
    }catch(ex){
        next(ex)
    }
})
   