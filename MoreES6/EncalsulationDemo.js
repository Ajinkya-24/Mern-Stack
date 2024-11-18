/*class Employee{
    name;
    age;
    city;
    salary;
}
let objEmployee=new Employee();
console.log(objEmployee);*/

//inserting the properties using Property
/*objEmployee.name="Sunil";
objEmployee.age=26;
objEmployee.city="Nagpur";
objEmployee.salary="320000";
//setting the property using methods
setname(newname){
    this.name=newname;
}
setage(newage){
    this.age=newage;
}
setcity(newcity){
    this.city=newcity
}
setsalary(newsalary){
    this.salary=newsalary;
}

let objEmployee=new Employee();
//inserting the Property using methods
objEmployee.setname("Sunil")
objEmployee.setage('36')
objEmployee.setcity('Nagpur')
objEmployee.setsalary('50000')
//getting the property using property
//console.log(objEmployee)
console.log(objEmployee.name,objEmployee.age,objEmployee.city,objEmployee.salary);*/
class Employee{
    name;
    age;
    city;
    salary;

    setName(newname){
        this.name = newname;
    }
    setAge(newAge){
        this.age = newAge;
    }
    setCity(newCity){
        this.city = newCity;
    }
    setSalary(newSalary){
        this.Salary = newSalary;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getCity(){
        return this.city;
    }
    getSalary(){
        return this.Salary;
    }
}

let objEmployee= new Employee();
console.log(objEmployee)
objEmployee.setName("sunil");
objEmployee.setAge(28);
objEmployee.setCity("mumbai");
objEmployee.setSalary("250000");

console.log(objEmployee.getName());
console.log(objEmployee.getAge());
console.log(objEmployee.getCity());
console.log(objEmployee.getSalary());

//console.log(objEmployee.Name,objEmployeee.Age,objEmployee.City,objEmployee.Salary)
//inserting properties using properties
/*objEmployee.name="ram";
objEmployee.age=29;
objEmployee.city="pune";
objEmployee.salary=200000;*/

/*console.log(objEmployee.name());
console.log(objEmployee.age());
console.log(objEmployee.city());
console.log(objEmployee.salary());*/