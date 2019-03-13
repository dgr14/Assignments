const numArray = [4,3,5,1,7,6,2,8,9]
const letterArray = ["c", "o", "p", "q", "l", "w", "x", "i"]

// numArray.sort((a, b) => {
//     return Math.floor(Math.random() * 2)
// })

// letterArray.sort()

// console.log(letterArray)

// ***REDUCE***

const reduced = numArray.reduce((sum, x) => {
   sum[x] = '10'
   return sum
}, {})

console.log(reduced)