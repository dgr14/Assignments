// ***PRELIMINARIES***

// #1 Write a for loop that prints to the console the numbers 0 through 9

// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

// #2 Write a for loop that prints to the console 9 through 0

// for (var i = 9; i > 0; i--){
//     console.log(i)
// }

// #3 Write a for loop that prints these fruits to the console

var fruit = ["banana", "orange", "apple", "kiwi"]

// for ( var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

// ***BRONZE MEDAL***

// #1 Write a for loop that will push the numbers 0 through 9 to an array

 emptyArray = []

// for (var i = 0; i < 10; i++){
//     emptyArray.push([i])
// }
// console.log(emptyArray)

// #2 Write a for loop that prints to the console only even numbers 0 through 100

// for (var i = 0; i <= 100; i += 2){
//     console.log(i)
// }

// #3 Write a for loop that will push every other fruit to an array

// for (var i = 0; i < fruit.length; i = i + 2){
     
//          emptyArray.push(fruit[i])
    
// }
// console.log(emptyArray)

// ------------------------------------------------------------------------------------------------

// ***SILVER MEDAL***

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// #1 Write a loop that will print out all the names of the people of the people array

// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
// }

// -------------------------------------------------------------------------------------------------------

// #2 Write a loop that pushes the names into a names array, and the occupations into an occupations array

 let nameArr = [];
 let occuArr = [];

// for (var i = 0; i < peopleArray.length; i++) {
//     nameArr.push(peopleArray[i].name)
//     occuArr.push(peopleArray[i].occupation)
// }
// console.log(nameArr)
// console.log(occuArr)

// #3 Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer"

// for (var i = 0; i < peopleArray.length; i = i + 2) {
//     nameArr.push(peopleArray[i].name)
//     occuArr.push(peopleArray[i].occupation)
// }
// console.log(nameArr)
// console.log(occuArr)

// ***GOLD MEDAL***

// #1-3 all you need to do is change the i and e values in the nested for loop.

// var numberGrid = []

// for (var i = 0; i < 3; i++){
//     numberGrid.push([])
//     for (var e = 0; e < 3; e++){
//         numberGrid[i].push(i)
//     }
// }

// console.log(numberGrid)

// #4

// var numberGrid = [
//     [0, 1, 2],
//     ["x", "y", "z"],
//     [1, 2, 3]
// ]

// for (var i = 0; i < 3; i++){
//     for (var e = 0; e < 3; e++){
//         numberGrid[i][e] = "x"
//     }
// }

// console.log(numberGrid)