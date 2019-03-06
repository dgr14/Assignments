// Adds text to the console
var addButton = document.getElementById("add")
    addButton.addEventListener("click", function(event){
        var inputBox = document.getElementById("input")
        var inputText = inputBox.value
        // event.target.textContent = inputText
        console.log(inputText)
    }
)

// Clears the text in the textbox
var clrButton = document.getElementById("clear")
    clrButton.addEventListener("click", function(event){
        document.getElementsByName("goomba").value = "";
    }
)

var h1 = document.createElement("h1");

h1.className = "header";
h1.textContent = "Javascript Made This";

var sub = document.createElement("h4");
sub.innerHTML= "<span class='name'>Darius<span/> wrote this"


var div = document.createElement("div");
div.className = "header"

div.appendChild(h1)
div.appendChild(sub)

document.body.prepend(div);

// console.log(h1)
// document.body.prepend(h1);
