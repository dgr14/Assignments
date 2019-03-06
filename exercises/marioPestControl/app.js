// How do I make the num input a variable so it can be dynamic
var goombaInputNum = document.getElementById("goombaInput")
var bobombInputNum = document.getElementById("bobombInput")
var cheepcheepInputNum = document.getElementById("cheepcheepInput")

var goombaPrice = 5
var bobombPrice = 7
var cheepcheepPrice = 11

var goombaNum = document.getElementById("enter")
    document.goomba.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(Number(goombaInputNum.value) * parseInt(goombaPrice))
    }
)

var bobombNum = document.getElementById("enter")
    document.bobomb.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(Number(bobombInputNum.value) * parseInt(bobombPrice))
    }
)

var cheepcheepNum = document.getElementById("enter")
    document.cheepcheep.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(Number(cheepcheepInputNum.value) * parseInt(cheepcheepPrice))
    }
)

// Create a function that takes the price and multiplies by the amount caught and adds for total price.
