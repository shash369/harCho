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

app.post('/todos', (req, res) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000), // unique random id
      title: req.body.title,
      description: req.body.description
    };
    fs.readFile("todos.json", "utf8", (err, data) => {
      if (err) throw err;
      const todos = JSON.parse(data);
      todos.push(newTodo);
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(201).json(newTodo);
      });
    });
  });

app.listen(port,()=>{
    console.log("server is active at"+`${port}`);
})