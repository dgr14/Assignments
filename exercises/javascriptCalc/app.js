var rs = require("readline-sync");

var mathOptions = ["Add", "Subtract", "Multiply", "Divide"]
var calcOn = true

var operation = rs.keyInSelect(mathOptions, "What operation would you like to perform?")

var firstNum = +rs.question("Enter your first number: ")
var secondNum = +rs.question("Enter your second number: ")

switch(operation){
    case 0:
       console.log(add(firstNum, secondNum))
        break;
    case 1:
        console.log(sub(firstNum, secondNum))
        break;
    case 2:
        console.log(mult(firstNum, secondNum))
        break;
    case 3:
        console.log(divi(firstNum, secondNum))
        break;
}
 
function add (num1, num2) {
    return num1 + num2 
}
function sub (num1, num2) {
    return num1 - num2 
}
function mult (num1, num2) {
    return num1 * num2 
}
function divi (num1, num2) {
    return num1 / num2 
}










// while(calcOn === true){
//     //Addition
//     var firstNum = rs.question("Enter your first number: ")
//     var secondNum = rs.question("Enter your second number: ")

//     if(operation === 0){
//         add(Number(firstNum) , parseInt(secondNum))
//     }
//     break;
// }