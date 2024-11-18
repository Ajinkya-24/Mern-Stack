class Vehicle{
    constructor (make,model)    {
        this.make= make;
        this.model=model;
    }

    startEngine(){
        console.log("Engine Get Start");
    }
    vehicleInfo(){
        console.log("Make: ",this.make,"Model: ",this.model)
    }
}
//need to call the method of Vehicle Class
let myVehicle = new Vehicle("Toyota","Glanza");
myVehicle.vehicleInfo();
myVehicle.startEngine();

class Car extends Vehicle{
        constructor(make,model,doors){
            super(make,model);
            this.doors=doors;
        }

        startEngine(){
            console.log("Start the Engine of", this.model)
        }
}
const myCar=new Car("Tata","Nexon",5);
myCar.startEngine();
myCar.vehicleInfo();