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

    console.log(req.body);

    // res.send(tot.toString()) 
    res.status(401).send(tot.toString())
    //we can use this syntax to chang the status code of the send file
})
app.listen(port,()=>{
    console.log("hello everyone");
})  