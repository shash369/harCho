const express= require('express')
const fs =require('fs')
const bodyParser=require('body-parser')
const { log } = require('console')
const app=express()
app.use(bodyParser.json())
const port=3000;


app.get('/',(req,res)=>{
   fs.readFile('todos.txt','utf8',(err,data)=>{
    if(err) throw err
    
    // else res.json(JSON.parse(data))
     else res.send(data) //if the file is in text formet
   })
})


app.listen(port,()=>{
    console.log("server is at"+`${port}`);
})