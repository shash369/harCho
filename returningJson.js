const express=require("express")
var bodyParser=require('body-parser')
const app=express()
const port =3000;
app.use(bodyParser.json())
app.get('/', (req,res)=>{ 
    res.send("hello")
})

app.get('/sum', (req,res)=>{
    var count=req.query.age;//req.body.age//req.header.age
    let tot=0;
    let mul=1;
    for (let i = 0;i <count; i++) {
        tot=tot+i;
    } 
    for (let i=1; i <=count; i++) {
         mul =mul*i;
        
    }
   let sumObject={//we are sennding two value in 
    sum:tot,//inform of a object 
    multiply:mul
   }
   res.send(sumObject)
   //json object is returned in the send formet
 
})
app.listen(port,()=>{
    console.log("hello everyone");
})  