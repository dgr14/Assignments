// Make a function that will return any given string into all caps followed by the same string all lowercase

// let str1 = 'how now brown cow'

// function strReturn(str) {
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// }

// strReturn(str1);

// ------------------------------------------------------------------------------

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor()

// let realNum = 10

// function halfNum(num) {
//     return Math.floor(num / 2)
// }

// console.log(halfNum(realNum));

// ------------------------------------------------------------------------------

// Make a function that uses slice() and the other functions you've written to return the first half of the string

//findMiddleIndex("Hello")
let findMiddleIndex = "Hello World"

// function halfStr(str) {
//     return str.slice((Math.floor(str.length) / 2)).length
// }

// console.log(halfStr(findMiddleIndex));

// --------------------------------------------------------------------------------

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

// function capitalizeHalf(str) {
//     return str.slice(0, (Math.floor(str.length) / 2)).toUpperCase() + str.slice((Math.floor(str.length) / 2)).toLowerCase()
// }
// console.log(capitalizeHalf(findMiddleIndex))

// ---------------------------------------------------------------------------------

// Make a function that takes any string and capitalizes any character that follows a space.

let strCap = "hey friends! practice practice practice!"

function strCapMaker(str) {
    newArr = str.split(' ')
     for (var i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substr(1)
     }
     return newArr.join(' ')
} 

console.log(strCapMaker(strCap))