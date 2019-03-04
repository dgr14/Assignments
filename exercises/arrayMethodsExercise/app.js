var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array

console.log(vegetables.pop())

// Remove the first item from the fruit array.

console.log(fruit.shift())

// Find the index of "orange."

console.log(fruit.indexOf("orange"))

// Add that number to the end of the fruit array.

console.log(fruit.push(fruit.indexOf("orange")))
console.log(fruit)

// Use the length property to find the length of the vegetable array.

console.log(vegetables.length)

// Add that number to the end of the vegetable array.

console.log(vegetables.push(vegetables.length))
console.log(vegetables)

// Put the two arrays together into one array. Fruit first. Call the new Array "food".

var foods = fruit.concat(vegetables)

// Remove 2 elements from your new array starting at index 4 with one method.

console.log(foods.splice(4, 2))
console.log(foods)
// Reverse your array.

console.log(foods.reverse())

// Turn the array into a string and return it

var strFoods = foods.toString()

console.log(strFoods)