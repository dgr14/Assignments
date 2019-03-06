var square = document.getElementById("square")
//Blue
square.addEventListener("mouseover", function(e){
    square.style.backgroundColor = "blue"
    }
)
//Red
square.addEventListener("mousedown", function(e){
    square.style.backgroundColor = "red"
    }
)
//Yellow
square.addEventListener("mouseup", function(e){
    square.style.backgroundColor = "yellow"
    }
)
//Green
square.addEventListener("dblclick", function(e){
    square.style.backgroundColor = "green"
    }
)
//Orange
window.addEventListener("wheel", function(e){
    square.style.backgroundColor = "orange"
    }
)

// ***Keypress EventListeners***

// Red
document.addEventListener("keydown", function(e){
    if (e.keyCode == 82){
    square.style.backgroundColor = "red"
        }
    }
)
// Blue
document.addEventListener("keydown", function(e){
    if (e.keyCode == 66){
        square.style.backgroundColor = "blue"
        }
    }
)
// Yellow
document.addEventListener("keydown", function(e){
    if (e.keyCode == 89){
        square.style.backgroundColor = "yellow"
        }
    }
)
// Green
document.addEventListener("keydown", function(e){
    if (e.keyCode == 71){
        square.style.backgroundColor = "green"
        }
    }
)
// Orange
document.addEventListener("keydown", function(e){
    if (e.keyCode == 79){
        square.style.backgroundColor = "orange"
        }
    }
)



// var addButton = document.getElementbyId("add")
//     addButton.addEventListener("click", function(event){
//         var inputBox = document.getElementById("input")
//         var inputText = inputBox.value
//         event.target.textContent = inputText
//     }) 
