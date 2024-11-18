function greet(fname){
    return new Promise((resolve, reject) => {
        if (fname){
            resolve(`Welcome ${fname}`)
        }else{
            reject('value not found')
        }
    })
}


async function userGreet(){
    try{
        const output= await greet("Ajinkya")
        console.log('Greeting');
        console.log(output);
    }
    catch(error){
        const outputError =error;
        console.log('failed');
        console.log('Outputerror')
    }
}

//call usergreet
userGreet();