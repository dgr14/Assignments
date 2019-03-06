var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

// Create three functions using the provided array as an argument

// First function: returns contents of the array, lyrics, to the console as a string, including necessary spaces
 
// function arrReturn(arg) {
//    let varReturn = arg.join(' ');
//     return varReturn;
// }
// console.log(arrReturn(lyrics))

// -------------------------------------------------------------------------------------------------------------------------

// Second function: returns lyrics backwards ("pretty so I'm myself kiss Gotta...")

// function reverse(arg) {
//     return arg.reverse()
// }
// console.log(reverse(lyrics))

// -------------------------------------------------------------------------------------------------------------------------

// Third function: returns a string of just every other word, (e.g. "this that cold Pfeiffer...")
//**********NEED*HELP*********************NEED*HELP*********************NEED*HELP*********************NEED*HELP***********

function everyOther(arg) {
        var newStr = ''
    for (var i = 0; i < arg.length; i += 2){
        // return arg[i].joi(' ');
        newStr += arg[i]
    }
    // console.log(newStr)
    return newStr
}
console.log(everyOther(lyrics));