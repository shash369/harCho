// const express=require('express')
// const app=express();
// const port =3000;
// app.get('/',(req,res)=>{
//     const count=1000;
//     let element=0;
//     for (let index = 0; index < count; index++) {
//          element =element+1;
        
//     }
//     res.send(element)
// })
// app.listen(port,()=>{
//     console.log("port is connected");
// })
// const express = require('express');
// const app = express();
// const port = 3000;
// function add(req,res){
//     const count=1000;
//     let answer=0;    
//     answer=answer+count;
//     res.send(answer.toString());
// }
// app.get("/", add)


// app.listen(port, () => {
//     console.log("port is connected");
// });

// app.get('/', (req, res) => {
//     const count = 1000;
//     let element=0;  // Initialize element to 0
//     for (let index = 0; index < count; index++) {
//         element = element + 1;
//     }
//     res.send(element.toFixed());  // Send as a string
// });

const express=require("express")
const app=express()
const port =3000
// app.use(express.json())

// function calculateSum(counter){
//     var sum=0;
//     for (let i = 0; i <counter; i++) {
//         sum=sum+i;
        
//     }
//     return sum;
// }
// function handleRequest(req,res){
//     //  
//     var cal=calculateSum(req.query.counter);

//     console.log(cal);
//     var answer=cal;
//     let sam=req.query.sam;
//     res.send(sam.toString())
//     // res.send(answer.toString());

// }
app.get('/', (req,res)=>{
    let count=req.query.counter;
    let tot=1;
    for (let index = 1; index <=count; index++) {
        tot=tot+index
    }
    res.send(tot.toString())

})
app.post('/postman' ,(req,res)=>{
    res.send('hello')
})
app.delete('/del' ,(req,res)=>{
    res.send(' deleting something')
})
app.put('/put' ,(req,res)=>{
    res.send('putting something')
})

app.listen(port,()=>{
    console.log("hello everyone");
})
