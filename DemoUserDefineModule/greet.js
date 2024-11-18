const welcome = require("./welcome");

function greetfunction(name) {
    return welcome(name); // Assuming welcome is a function that takes a name as an argument
};

module.exports = greetfunction; // Correctly exporting the greetfunction