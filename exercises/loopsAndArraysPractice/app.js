// #1 Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let compNum = 0;

for (i = 0; i < officeItems.length; i++){
    if (officeItems[i] == "computer") {
       compNum = compNum + 1

    
    }
    console.log('There are ' + compNum + ' computers')
}


// #2 Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  
//#1 
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {    

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see Mad Max')
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see Mad Max')
    }
    
// #2

// 18+ & male
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {

        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see Mad Max, let HIM in')

//  under 18 & male
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {

        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let HIM in")

//  18+ & female
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {

        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury Road")

// under 18 & female
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {

        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " isn't old enough. SHE isn't good to see Mad Max Fury Road")
    }
}

// OPTIONAL BONUS CHALLENGE

// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.
// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample arrays:

var array1 = [2, 5, 435, 4, 3]
var array2 = [1, 1, 1, 1, 3]
var array3 = [9, 3, 4, 2]
var result = 0
ff
var lightStatus = (arrayFunction) => {

for (var i = 0; i < arrayFunction.length; i++) {
    result += arrayFunction[i]   
}
    // if (result % 2 === 1){
    //     console.log('The light is on')
    // } else {
    //     console.log('The light is off')
    // }

    (result % 2 === 1) ? console.log('The light is on') : console.log('The light is off')
}
lightStatus(array1)