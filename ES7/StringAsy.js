function comparestring(s1,s2){
    return new Promise((resolve, reject) => {
        if(s1==s2){
        resolve(`Given String Are equal`)
        }else{
            reject(`Given String are not equal`);
        }
    });
}

async function result() {
    try{
        const output = await comparestring("s1","s2")
        console.log("Output is :");
        console.log(output)
    }
}