const perform = require('./process')
const prompt = require('prompt-sync')()

// perform.enroll("sustainable energy hackathon","razak")
// perform.enroll("sustainable energy hackathon","manikandan")
// perform.enroll("sustainable energy hackathon","moorthi")
// perform.enroll("sustainable energy hackathon","annamalai")
// perform.announce("sustainable energy hackathon")
// // perform.newHackathon()
// perform.viewHackathons()


var choice, eve_name;
while(true){
    console.log("welmcome to Zeaous Tech Corp Event Management")
    console.log("1. Schedule New Event\n2. View All Events\n3. Enroll partiticpants\n4. Announce Reward winners\nAny Other to Exit")
    choice = Number(prompt("enter your choice "))
    switch(choice){
        case 1:perform.newHackathon();break;
        case 2:perform.viewHackathons();break;
        case 3:
            eve_name = prompt("enter the name of hacksthon")
            const student = prompt("enter the student to be participated in the "+eve_name)
            perform.enroll(eve_name,student)
            break;
        case 4:
            eve_name = prompt("enter the name of hacksthon")
            perform.announce(eve_name)
            break;
        default: console.log("logging out");return
    }
}