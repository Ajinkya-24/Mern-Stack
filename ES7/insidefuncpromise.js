function sayHello(fname){
    return new Promise((res,rej)=>{
        if(fname){
           // res('Welcome ${fname}')
           res(`welcome ${fname} ${lname}`)
        }
        else{
            rej('Value not found')
        }
    });
}
sayHello().then((output)=>{
        console.log(output);
});
//catch((console.log(error)