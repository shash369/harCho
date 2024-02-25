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

app.post('/todos',(req,res)=>{
  let newTodo={
    id:Math.floor(Math.random() * 1000000),
    title:req.params.title,
    description:req.params.description
  }
  fs.readFile('todos.txt',"utf-8",(err,data)=>{
    if(err) throw err
    let todo=JSON.parse(data)
    todo.push(newTodo)
    fs.writeFile('todos.txt',JSON.stringify(todo),(err)=>{
      if(err) throw err

      res.send("OK")
    })
  })
})

app.listen(port,()=>{
    console.log("server is at"+`${port}`);
})