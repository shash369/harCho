//todo wull be saved in a seprate file
const express=require('express')
const bodyParser=require("body-parser")
const fs=require('fs')
const cors=require('cors')
const app=express()
app.use(bodyParser.json())
app.use(cors())
const port=6969;

function findIndex(arr,idToFind){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id===idToFind) {
            return i
        }
    }
    return -1;
}

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

app.put('/todos/:id',(req,res)=>{
    fs.readFile('todos.json','utf8',(err,data)=>{
        if (err) {
            throw err
        }
        else{
            let todos=JSON.parse(data)
            let indexf=findIndex(todos,parseInt(req.params.id))
            if (indexf===-1) {
                res.status(404).send("id i not found")
            }
            else{
                let newTodo={
                    id:todos[indexf].id,
                    title:req.body.title,
                    description:req.body.description
                }
                todos[indexf]=newTodo;
        
        fs.writeFile('todos.json',JSON.stringify(todos),(err)=>{
            if (err){
                throw err;
            }
            else{
                res.status(200).json(newTodo);
            }
        })
            }
        }
    })
})

app.delete("/todos/:id",(req,res)=>{
     
     fs.readFile('todos.json','utf8',(err,data)=>{
        if (err) {
            throw err
        }
        else{
            let todo=JSON.parse(data) //assign the value in array form due too being a external value


            idToFind=parseInt(req.params.id)  //take id from params 
            todoIndex=findIndex(todo,idToFind)  //find th index of the given id
            
            todo.splice(todoIndex,1)  //method to remove at index in an array

            fs.writeFile('todos.json',JSON.stringify(todo),(err)=>{
                if (err) {
                    throw err
                }
                else{
                    res.status(200).json(todo)
                }
            })
        }
     })
      
})

app.listen(port,()=>{
    console.log("server is active at"+`${port}`);
})