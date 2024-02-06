const express=require("express")
var bodyParser=require('body-parser')
const app=express()
const port =3000;
app.use(bodyParser.json())
app.get('/', (req,res)=>{ 
    res.send("hello")
})

app.post('/sum', (req,res)=>{
    var count=req.body.age;
    let tot=0;
    for (let i = 0;i <count; i++) {
        tot=tot+i;
    } 
   let sumObject={
    sum:tot
   }
   res.send(sumObject)
   //json object is returned in the send formet
 
})
app.listen(port,()=>{
    console.log("hello everyone");
})  