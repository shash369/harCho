const express=require("express")
const app=express()
const port =3000;
app.get('/:use', (req,res)=>{//will always work doesnt matter what you put after the / in the url bar 
    res.send("go to the main page do you copy")
    
   
})
app.listen(port,()=>{
    console.log("hello everyone");
    console.log(req.params.use)
})