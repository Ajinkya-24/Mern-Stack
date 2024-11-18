/*let cities=['Nagpur','Delhi','Mumbai','Jaipur','Indore'];

for(let city of cities){
    console.log(city);
}
//Destructure

let[city,city2,city3,city4,city5]=cities;
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log(city5);*/

let numbers1=[11,22,33,44];
let numbers2=[10,20,30,40];
let numbers3=[...numbers1,...numbers2];
console.log(numbers3);
console.log("-------------------")
let numbers4=numbers1+numbers2;
console.log(numbers4);
let numbers5=numbers1.concat(numbers2);
console.log(numbers5);
//rest Operator
function animal(...animal){
    return animal;
}
console.log("Lion","Tiger","Fox")