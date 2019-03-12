const antiCaps = str => {
    let finalString = ""
        for (let i = 0; i < str.length; i++){
            if (str[i] === str[i].toUpperCase()){
                finalString += str[i].toLowerCase()
            } else {
                finalString += str[i].toUpperCase()
            }
        }     
    return finalString
}

console.log(antiCaps('Hello'))  // hELLO
console.log(antiCaps('racEcar'))  // RACeCAR
console.log(antiCaps('bAnAnA'))  // BaNaNa