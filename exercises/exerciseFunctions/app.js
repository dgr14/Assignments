// Write a function that accepts two numbers as parameters, and returns the sum

// function returnSum(num1, num2) {
//     return num1 + num2
// }

// console.log(returnSum(2,2))

//  ---------------------------------------------------------------------------------------

//  Write a function that accepts three numbers as parameters, and returns the largest of those numbers

// function threeNum(num1, num2, num3) {

//     if (num1 > num2 && num1 > num3) {
//         // num 1 largest
//         return `${num1} is the largest`
//     } else if (num2 > num1 && num2 > num3) {
//         // num 2 largest
//         return `${num2} is the largest`
//     } else {
//         // num 3 largest
//         return `${num3} is the largest`
//     }
// }
// console.log(threeNum(100,1000,666))

// ---------------------------------------------------------------------------------------------

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// function evenOrOdd(num1) {
//     if (num1 % 2 === 0){
//         return 'even'
//     } else{
//         return 'odd'
//     }
// }
// console.log(evenOrOdd(5))

// ----------------------------------------------------------------------------------------------

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

// function str20(str) {
//     if (str.length <= 20){
//         return str + str
//     } else {
//         return str.slice(0, str.length / 2)
//     }
// }
// console.log(str20('laksdfjfhfhfhfhfhfhfh;'))

//  -----------------------------------------------------------------------------------------------

// OPTIONAL CHALLENGE
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

const fibNums = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]



function fibSum(n) {
    let total = 0;
    for (var i = 0; i < n - 1; i++){
        
        total += n
        
    }
    return total
}

console.log(fibSum(5))
