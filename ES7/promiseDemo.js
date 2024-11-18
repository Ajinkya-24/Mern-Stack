//using Promise Object
let fname ='Ajinkya';
let lname ='Sahastrabuddhe';
const promiseObject=new Promise((resolve,reject)=>{
    if(fname && lname){
        resolve(`Welcome to Pollotti ${fname} ${lname}`);
    } else if(lname==undefined){
        reject(`value not found for lname`)
    }
    else{
        reject(`Value not Found`)
    }
});

promiseObject.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})