let student = {
    fname: "Anil",
    lname: "Kapoor",
    age: 20,
    city: "Pune",

    showStudent: function() {
        console.log("Student Name:", this.fname, this.lname);
    }
};

student.showStudent();
student.fname = "Vivek";
student.showStudent();

console.log("-------------------------");

let addition = {
    num1: 10,
    num2: 20,
    num3: 30,
    num4: 40,
    result: 0, // Initialize result

    add: function() {
        this.result = this.num1 + this.num2 + this.num3 + this.num4;
    },

    display: function() {
        return this.result;
    }
};

// Call the add method to calculate the result
addition.add();

// Display the result
console.log(addition.display());
