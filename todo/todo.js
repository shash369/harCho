const express=require('express');
const app=express()
const port=3001;
app.get('/',(req,res)=>{
    res.status(200).send("HELLO");
})
app.listen(port,()=>{
    console.log("port listining at"+`http://localhost:${port}`);
})