var read = require("readline-sync");


console.log("pincode is atleast 6 digit and take one alphabets  or special character at end  ")
const regex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{2}[A-Z!@#\$%\^\&*\]{1}$");
var pin=read.question("enter the pin :");
let result = regex.test(pin);
console.log(result);
