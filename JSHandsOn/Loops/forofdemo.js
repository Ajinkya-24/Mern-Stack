let number =[10,20,30,40,50];

console.log(typeof(number),":",number);
console.log(number[0]);
console.log("--------------");
console.log("Retrive the values of Array using the Loop");
for(let i=0;i<number.length;i++){
    console.log("Value at",i,"Index is =",number[i]);
}
console.log("--------------------------------------");
//Take the Value for Array want to stire into Variable so that we can use for-of
console.log("----retrive the value and store into the variable using for of  loop");
//for (variableName of arrayname){}
for(number of number){
    console.log(number);
} 
console.log("-------------");
console.log(number);
//WAP take array of Cities with 4 index and retrive data in city
let city =["Nagpur","Indore","Bhopal","Jaipur"];
for(city of cities){
    console.log(city)
}