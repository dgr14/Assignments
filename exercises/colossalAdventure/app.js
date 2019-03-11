const readLine = require("readline-sync");
let health = 100;
let enemyHealth = 100;
let inventory = []

randomNum2 = Math.floor(Math.random() )
randomNum3 = Math.floor(Math.random() * 3)
const enemyNames = ["Demagorgon", "Mind-Flayer", "Upside Down"]

const name = readLine.question(`Welcome to Hawkins, Indiana. What is your name?  `)

// const finalObject = new Monster(names[Math.floor(Math.random() * names.length)]);

// STRATEGY NOTES
/*
 ***WRITE DOWN THE TASKS***
character creation
running from a fight
fighting
enemy creation
enemy attacking
enemy dying (and dropping an item)
character dying
*/
const wannaWalk = readLine.keyInYN(`Would you like to go on a walk or bike around the neighboorhood?  `)

// ***FUNCTIONS***
function walk(){

    while(health > 0){
        if (wannaWalk = true){
            // getting the probability for a fight
            if (1 in 4){
                fight()
            } else {
                console.log(`You have been crusing around the neighborhood getting a feel for the place. You can't help but feel something is off however... `)
            }
        } else {
            console.log(inventory)
        }
    }
}

function run(){
    while(health > 50)
        if (1 in 2){
            console.log(`You have successfully escaped, you cautiously continue wandering around`)

        } else {
            fight()
        }
}

function fight(){
    if (1 in 2){
       attackEnemy()
    } else {
        enemyAttack()
    }
}

function attackEnemy(){
    if (1 in 2){
        enemyHealth = enemyHealth - 25
    } else {
        block()
    }
}

function enemyAttack(){
    health = health - 25
}

function die(){
    if (health <= 0){
    console.log(`You have been taken to the 'upside down'. Your death has shaken the town of Hawkins and now a brave team of little kids and a cop will search for your body while a strange goverment organization intercedes. `)
    }
}

function enemyDie(){
    if (enemyHealth <= 0){
        console.log(`You have defeated your opponent`)
    }
}
// enemyCreation()