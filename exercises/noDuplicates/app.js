// Given a string, remove any duplicates
var input = "bookkeeper larry"

// function removeDup (input){
//     for (var i = 0; i < input.length; i++){
//         if (input.charAt(i) === input.charAt(i + 1)) {
//             input.slice(i, 1)
//             input = input.substr(0, i) + input.substr(i + 1)
//         }
//     }
//     return input
// }

// console.log(removeDup(input))

// Create a function that randomly removes a letter

function removeDup (input){
    for (var i = 0; i < input.length; i++){
        if (input.Math.floor === input.charAt(i + 1)) {
            input.slice(i, 1)
            input = input.substr(0, i) + input.substr(i + 1)
        }
    }
    return input
}
