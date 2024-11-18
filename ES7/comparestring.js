//using Promise Object
let string1 ='Hello';
let string2 ='Hello';
const promiseObject=new Promise((resolve,reject)=>{
    if(string1==string2){
        resolve(`given string are equal`)
    }
    else{
        reject(`given string are not equal`)
    }

});

promiseObject.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})