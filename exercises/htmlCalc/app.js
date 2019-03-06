// Add
var add1 = document.getElementById("addInput1")
var add2 = document.getElementById("addInput2")
document.addForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(Number(add1.value) + parseInt(add2.value))
    }
)
// Subtract
var sub1 = document.getElementById("subInput1")
var sub2 = document.getElementById("subInput2")
document.subForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(Number(sub1.value) - parseInt(sub2.value))
    }
)
// Multiply
var mult1 = document.getElementById("multInput1")
var mult2 = document.getElementById("multInput2")
document.multForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(Number(mult1.value) * parseInt(mult2.value))
    }
)

//How do I return the values to one area, similar to a calc layout
