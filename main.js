const express=require("express")
const app=express()
const port =3000;
app.get('/', (req,res)=>{//will always work doesnt matter what you put after the / in the url bar 
    res.send("hello")
})

app.post('/sum', (req,res)=>{
    var count=req.headers.counter;
    let tot=10;
    for (let i = 0;i <count; i++) {
        tot=tot+i;
    }

    res.send(tot.toString())
})
app.listen(port,()=>{
    console.log("hello everyone");
})