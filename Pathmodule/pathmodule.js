const { log } = require('console');
const path= require('path');

const filepath = "C:\Users\Ajinkya_S\OneDrive\Desktop\Mern Stack\NodejsHandsOn\NodeModule\Pathmodule/demo.html"
const baseName = path.basename(filepath);
log("the Base folder of File : ",baseName);

const folderName = path.dirname(filepath);
console.log("File is Availabel in :",folderName);

const fileextension = path.dirname(filepath);
console.log(fileextension);