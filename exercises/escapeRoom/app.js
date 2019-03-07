var readLine = require("readline-sync");
var options = ["Put hand in hole","Find the key","Open the door"]
var isAlive = true

while(isAlive){
    var selectedIndex = readLine.keyInSelect(options, "What would you like to do?")

    console.log(`You have selected ${options[selectedIndex]}`);

    if(selectedIndex === 0){
        console.log("You have been killed");
        isAlive = false;
    }
    if(selectedIndex === 1){
        console.log(`You have found the key! Now open the door to be free!`);
        var hasKey = true; 
    }
    // console.log(hasKey)
    if(selectedIndex === 2){
        console.log(`How do you expect to open the door with no key?!`);
        if (selectedIndex === 2 && hasKey === true) {
        console.log(`You are free!`)
        break;
        }
    }
}