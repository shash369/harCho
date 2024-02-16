const express =require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json())
const port=3003;


app.get('/todos',(req,res)=>{
   res.send("Todos will be added here");
})
const todos=[];
let count=1;
app.post('/todos',(req,res)=>{
    const newTodo={
        id:  count,
        title:req.body.title,
        description:req.body.description
    }
     count++
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

//dfvc
app.listen(port,()=>{
    console.log("port is lisning at http://localhost:3003/todos")
})