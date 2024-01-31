const express =require("express")
const app=express();
const port=3001;

function middle(req,res,next){
    if(req.query.count==10){
        next();
    }
 else{
    res.send("Erro 404");
 }
}
app.use(middle);
app.get('/',(req,res)=>{
    res.send("this is the main page");
})

app.listen(port,()=>{
    console.log("server is listining on the port no:"+port);
})