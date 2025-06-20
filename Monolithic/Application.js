const prompt = require('prompt-sync')()
console.log("my MERN my Project")

// const studentName = "Sriram"
// var studentCollege = "MEC"
// let contact = 876545678765
// const preRequisite = false
// const interested = ["node","react"]

// console.log(typeof(interested))

// studentName = "Vishnu"
// studentCollege = "MCE"

var studentName = prompt("Enter the name ")
var studentCollege = prompt("Enter the college ")
let contact = Number(prompt("Enter the contact "))
const preRequisite = Boolean(prompt("Do you know JS already "))
const interested = prompt("Enter the intrested skills separated by ,").split(",")

console.log("Thanks for enrollment "+studentName+" for "+interested+" from "+studentCollege)
