const { error } = require('console');
const fs= require('fs');

const fileName='renameDemo.html';
const newName='renameddemo.txt';

fs.rename(fileName,newName,(error)=>{
    
})