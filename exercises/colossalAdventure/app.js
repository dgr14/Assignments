const readLine = require("readline-sync");
let inventory = []
let rewards = ["Gold", "Silver", "Jewels"]

const name = readLine.question(`Welcome to Hawkins, Indiana. What is your name?  `)
const char = {
    name: `${name}`,
    health: 100,
    strength: 10,
}
 
class mainCharacter{
    constructor(health, strength, name){
        this.health = enemyHealth;
        this.strength = strength;
        this.name = name;
    }
}
class Enemy {
    constructor(props) {
        this.name = props.name
        this.health = props.health
        this.strength = props.strength
        this.reward = rewards.[Math.floor(Math.random() * rewards.length + 1)]
    }
}

const demogorgon = new Enemy(150, 200, "Demogorgon")
const mindFlayer = new Enemy(200, 300, "Mind Flayer")
const upsideDown = new Enemy(1000, 1000, "The Upside Down")

// const finalObject = new Monster(names[Math.floor(Math.random() * names.length)]);

randomNum3 = Math.floor(Math.random() * 3)
// const enemyNames = ["Demagorgon", "Mind-Flayer", "Upside Down"]
const wannaWalk = readLine.keyInYN(`Hello ${name}, would you like to go on a walk or bike around the neighboorhood?  `)
console.log(mainChar)
// ***FUNCTIONS***
function walk(){
    
    while(health > 0 && wannaWalk === true){
        // getting the probability for a fight
        if (1 in 4){
            fight()
        } else {
            console.log(`You have been crusing around the neighborhood getting a feel for the place. You can't help but feel something is off however... `)
            strength = strength - 1
        }
    }
}
    
function run(){
    while(health > 50){
        if (1 in 2){
            console.log(`You have successfully escaped, you cautiously continue wandering around`)
        } else {
            fight()
        }
    }
}
// Attack Enemy
function fight(){
    while (health > 0){
        if (1 in 2){
            attackEnemy()
        } else {
            enemyAttack()
        }
    }
}
// Player succesfully attacks enemy
function attackEnemy(){
    enemyHealth = enemyHealth - 150
    strength = strength - 1
}
// Player gets attacked
function enemyAttack(){
    health = health - 25
    enemyStrength = enemyStrength - 1
}

function die(){
    if (health <= 0){
        console.log(`You have been taken to the 'upside down'. Your death has shaken the town of Hawkins and now a brave team of little kids and a cop will search for your body while a strange goverment organization intercedes. `)
    }
}

function enemyDie(){
    if (enemyHealth <= 0){
        console.log(`You have defeated your opponent`)
        // inventory.push("Gold")
    }
}
// enemyCreation()
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