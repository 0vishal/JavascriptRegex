var read = require("readline-sync");

console.log("pincode is atleast 6 digit and taking special characters and alphabets at the begining ")
const regex = RegExp("^[A-Z!@#\$%\^\&*\]{1}[0-9]{2}[\\s]?[0-9]{3}$");
var pin=read.question("enter the pin :");
let result = regex.test(pin);
console.log(result);
