//todo wull be saved in a seprate file
const express=require('express')
const bodyParser=require("body-parser")
const fs=require('fs')
const app=express()
app.use(bodyParser.json())
const port=6969;

app.get('/todos',(req,res)=>{
    fs.readFile('todos.json' ,"utf8",(err,data)=>{
        if (err) {
            throw err
        }
        res.json(JSON.parse(data))
    });

})

app.listen(port,()=>{
    console.log("server is active at"+`${port}`);
})