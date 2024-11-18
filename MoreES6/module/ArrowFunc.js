//Normal Function

function add(n1,n2){
    return n1+n2;
}

console.log("Normal Function",add(23,45))

//Arrow Function
const addArrow =(n1,n2)=> (n1+n2);
console.log("Arrow Function",addArrow(23,50))

//ArrowofString
const fullName = (firstname,lastname)=> (firstname+lastname)
console.log("Full name is",fullName("Ram","Chandra"))

const voter=(age)=>(6)
    //const result =(age>18)?"Voter":"Not Voter"
