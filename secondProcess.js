
// fetch("http://localhost3000",{
//     method:"POST"
// },).then((result)=>{
//     console.log(result);
// })
function logResponseBody(jsonBody){
   console.log(jsonBody);
}
function callback(result){
    // console.log(result)
   
    result.json().then(logResponseBody)
}

let senObj={
  method:"GET"
}
fetch("http://localhost:3000/sum?age=100",senObj).then(callback)//this will work without 
                                                              // senObj