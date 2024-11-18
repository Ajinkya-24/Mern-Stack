const fs = require('fs');

const filename='Demo.html';
const filecontent =

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome in Demo File</h1>
    <p>File created using fs module</p>
</body>
</html>`

fs.writeFile(filename,filecontent,(error)=>{
    if(error){
       console.log(error); 
    }
    console.log(`File Created Successfully : ${filename}`)
})