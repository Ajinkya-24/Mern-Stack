function msg(){
    console.log("Hello at pallotti")
    setTimeout(()=>{
        sayBye();
    },2000)
    console.log("Nagpur")
}

function sayBye(){
    console.log("Bye Bye")
}
msg();