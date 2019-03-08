const readLine = require("readline-sync");
// "turns game on"
var isAlive = true
genders = ["Male", "Female", "Prefer not to disclose"]

//Game Setup questions


while(isAlive){
    const name = readLine.question(`Welcome to Hawkins, Indiana. What is your name?  `)
    gender = readLine.keyInSelect(genders, `Hello ${name}, nice to meet you. How do you identify your gender?  `)

// Male Story
    if (gender === 0){


    }
// Female Story
    if(gender === 1){

    }
// Non-Disclosed Story
    if(gender === 2){
        console.log(`Work in Progress`)
        break;
    }
}

