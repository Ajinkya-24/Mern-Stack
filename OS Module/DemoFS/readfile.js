const { error } = require('console');
const fs =require('fs');

const fileName='demo.html';

fs.readFile(fileName,'utf-8',(error,data)=>{
    if(error){
        console.log('')
    }
})