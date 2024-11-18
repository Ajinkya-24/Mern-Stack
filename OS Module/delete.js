const fs =require('fs');
const filename= 'index.html';

fs.unlink(filename,(e)=>{
    if(e){
        console.log(e)
    }else{
        console.log('File Successfully' ${filename  })
    }
})