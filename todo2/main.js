const express =require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json())
const port=3003;

let todos=[];

function findIndex(arr,id){
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].id===id){
        return i
       }
        else{
            return -1
        }
    }
}
// function findIndex(arr, id) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].id === id) {
//             return i;
//         }
//     }
//     return -1;  // Move this line outside the loop
// }

// function removeAtIndex(arr ,id){
//     let newArray=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].id!=id) {
//             newArray.push(arr[i])
//         }
        
//     }
//     return newArray
// }
function removeAtIndex(arr, id) {   // let arr = [1, 2, 3, 4, 5];  let id = 2; 
    arr.splice(id, 1);              // arr.splice(id, 1);
                                    // console.log(arr); 
                                    // Output: [1, 2, 4, 5]
    return arr;                     
}



let count=1;

app.get('/todos',(req,res)=>{
    res.send(todos);
 })
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

app.delete('/todos/:id',(req,res)=>{
    const ID=findIndex(todos,parseInt(req.params.id))// return of req.params.id is a string
    if (ID === -1) {
        res.status(404).send("entered id not found")
    }
    else{
      todos=removeAtIndex(todos,ID);
    }
    res.status(200).send("deletion is succesfull");
})

app.listen(port,()=>{
    console.log("port is lisning at http://localhost:3003/todos")
}) 