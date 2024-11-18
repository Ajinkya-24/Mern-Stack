const event = require('events');
const {EventEmitter} = require('stream');

class MyEmits extends EventEmitter{

}

const myEmits = new MyEmits();
myEmits.on('greet',name=>{
    console.log(`Welcome ${name}`)
});

myEmits.emit('greet',"Ajinkya");

console.log('------------------------')

myEmits.on('bye',name=>{
    console.log(`Bye ${name}`);
});

myEmits.emit('bye',"Ajinkya");
console.log("----------------------------------");

for(let n=1; n<=5;n++){
    myEmits.emit('bye',"Ajinkya")
}