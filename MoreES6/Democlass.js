//Creating thr Object Constructor
let Employee=new Object();
Employee.empname="Radhe";
Employee.empage=23;
Employee.empcity="Bangalore";
Employee.showEmployee=function(){
    console.log("Employee Name: "+this.empname+""+this.empage+""+this.empcity);
}
//console.log(Employee);//{, , , , , ,}



/*class student{
    num1;
    num2;
    constructor(num1,num2){
     this.num1=num1;
     this.num2=num2;
     console.log(num1+num2)
    }
    name="Ram"
    age=20;
    display(){
        console.log("Hello"+this.name+""+this.age)
    }
}

function display(){
    console.log("Hello World");
}
display()//calling Function
const objStudent=new  student(23,25);
objStudent.display()//calling method of the Class*/


