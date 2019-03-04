// Preliminaries

if (5 > 3){
    return('is greater than');
}

if ('cat'.length === 3){
    return('is the length')
}

else if ('cat' === 'dog'){
    return('not the same')
}

// Bronze Medal

var person = {
    name: "Bobby",
    age: 12
  }

if (age >= 18) {
    return '`${name}` is allowed to go to the movie'
}

if (name[0] === 'B') {
    return '`${name}` is allowed to go to the movie'
}

if (name[0] === 'B' && age > 18) {
    return '`${name}` is allowed to go to the movie'
}

// Silver Medal

if (1 === '1') {
    return 'strict'
} else if (1 == 1) {
    return 'loose' || 'abstract'
} else {
    return 'not equal at all'
}

if (1 <= 2 && 2 === 4) {
    return 'yes'
}

// Gold Medal


// Write an if statement that checks to see if "dog" is a string

if (typeof 'dog' === 'string') {

}

// Write an if statement that checks to see if "true" is a boolean

if (typeof true === 'boolean') {

}

// Write an if statement that checks to see if a variable has been defined or not

if (anyVar === null) {

}

//Write an if statement asking if "s" greater than 12

if ('s' > 12) {

}

//Write a ternary statement that console.logs whether a number is odd or even
var myNum = 10;
// Write your ternary here to log if `myNum` is odd or even.

var oddOrEven = (myNum % 2 === 0) ? "even":"odd";

// It should continue to work correctly even if myNum changes to a different number


// Practive on iterating through arrays

var animals = ['dog', 'rat', 'octopus'];

for (var i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

