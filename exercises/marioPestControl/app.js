// How do I make the num input a variable so it can be dynamic
var goombaInputNum = document.getElementById("goombaInput")
var bobombInputNum = document.getElementById("bobombInput")
var cheepcheepInputNum = document.getElementById("cheepcheepInput")

var goombaPrice = 5
var bobombPrice = 7
var cheepcheepPrice = 11

var goombaTotal = 0
var bobombTotal = 0
var cheepcheepTotal = 0

function totalPrice (){
    document.getElementById("priceReturn").textContent = goombaTotal + bobombTotal + cheepcheepTotal
}

var goombaNum = document.getElementById("enter")
document.goomba.addEventListener("submit", function(event){
    event.preventDefault()
    goombaTotal = (Number(goombaInputNum.value) * parseInt(goombaPrice))
    document.getElementById("goombaDis").textContent = goombaTotal
    totalPrice()
})

var bobombNum = document.getElementById("enter")
document.bobomb.addEventListener("submit", function(event){
    event.preventDefault()
    bobombTotal = (Number(bobombInputNum.value) * parseInt(bobombPrice))
    document.getElementById("bobombDis").textContent = bobombTotal
    totalPrice()
})

var cheepcheepNum = document.getElementById("enter")
document.cheepcheep.addEventListener("submit", function(event){
    event.preventDefault()
    cheepcheepTotal = (Number(cheepcheepInputNum.value) * parseInt(cheepcheepPrice))
    document.getElementById("cheepcheepDis").textContent = cheepcheepTotal
    totalPrice()
})
