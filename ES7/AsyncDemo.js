function sayHello(){
    console.log("Welcome to Pallotti");
}

function sayBye(){
    console.log("Bye Bye");
}

setTimeout(()=>{
    sayBye ();
},2000)
sayHello();









//synchroneous code
/*console.log("Hello 1");
setTimeout(() => {
    console.log("Hello 1.5");

},2000)
console.log("Hello 2");
console.log("Hello 3");
console.log("Hello 4");*/