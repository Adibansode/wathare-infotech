const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const DataModel=require('./models/data')
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.get('/getdata',(req,res)=>{
    DataModel.find()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{   
    console.log("running")
})