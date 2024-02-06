const express=require("express")
var bodyParser=require('body-parser')
const app=express()
const port =3000;
app.use(bodyParser.json())
function givePage(req,res){
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>sending html as response</title>
  </head>
  <body>
      <h1>
          Hello World;
      </h1>
  </body>
  </html>`)

//   res.send(__dirname+"./index.js")  method-2
}
app.get('/',givePage)

// app.post('/sum', (req,res)=>{
//     var count=req.body.age;
//     let tot=0;
//     for (let i = 0;i <count; i++) {
//         tot=tot+i;
//     }

//     console.log(req.body);  
//     res.status(401).send(tot.toString())
// })

app.listen(port,()=>{
    console.log("hello everyone");
})  