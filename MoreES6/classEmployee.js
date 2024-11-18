class Employee{
    fname="Ajinkya"
    lname="Sahastrabuddhe"
    age=20;
    city="Nagpur"
    constructor(fname,lname,age,city){
     this.fname=fname;
     this.lname=lname;
     this.age=age;
     this.city=city;
    }
    showEmployee(){
     console.log(fname,lname,age,city);
     console.log("Age"+this.age,"from",+this.city)
    }    
 }