const prompt = require('prompt-sync')()
// function factorial(numbers){
//     let data = 1
//     while(numbers>=1){
//         data *= numbers
//         numbers--
//     }
//     return data
// }
// const hai = "razak"
const factorial = (numbers) => {
    let data = 1
    while(numbers>=1){
        data *= numbers
        numbers--
    }
    return data
}

var result = factorial(Number(prompt("Enter the number to find factorial ")))
console.log(result)