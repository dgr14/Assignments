//Functions to be performed

let numOfClicks = 0

// Click Events

document.addEventListener("click", function(){
    const display = document.getElementById("display").innerHTML
    numOfClicks++;

})

console.log(numOfClicks)