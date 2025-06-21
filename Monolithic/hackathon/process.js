var event = require('./data').hackathons
const prompt = require('prompt-sync')()

// console.log(event)

// schedule new hackathon
const newHackathon = () =>{
    var upcoming = {
        "name":prompt("enter the name of the hackathon "),
        "organizer":prompt("enter the host of the hackathon "),
        "winner":"",
        "firstrunner":"",
        "secondrunner":"",
        "participants":[]
    }
    event.push(upcoming)
    console.log(upcoming.name+" has been scheduled")
}

// fun to add participants 
const enroll = (eve_name, student) =>{
    for(var index=0;index<event.length;index++){
        if(event[index].name==eve_name){
            if(event[index].winner==""){
                event[index].participants.push(student)
                console.log(student+" has enrolled in the "+eve_name)
                return
            }
            else{
                console.log(eve_name+" was held already")
                return
            }
        }
    }
    console.log("invalid "+eve_name)
}

// fun to announce winner, frunner, srunner
const announce = (eve_name) =>{
    for(var index=0;index<event.length;index++){
        if(event[index].name==eve_name){
            if(event[index].winner==""){
                console.log(event[index].participants)
                console.log("Select winner, first-runner, second-runner by entering their names from above participants list ")
                const temp_winner = prompt("enter the name of the winner ")
                const temp_frunner = prompt("enter the name of the first runner ")
                const temp_srunner = prompt("enter the name of the second runner ")
                if(event[index].participants.includes(temp_winner)&&event[index].participants.includes(temp_frunner)&&event[index].participants.includes(temp_srunner)){
                    event[index].winner=temp_winner
                    event[index].firstrunner = temp_frunner
                    event[index].secondrunner = temp_srunner
                    console.log(eve_name+" announced reward winners")
                    return
                }
                else{
                    console.log(temp_winner+"/"+temp_frunner+"/"+temp_srunner+" was not participated in "+eve_name)
                    return
                }
            }
            else{
                console.log(eve_name+" was held already")
                return
            }
        }
    }
}

const viewHackathons = () =>{
    console.log(event)
}


module.exports = {enroll,announce,newHackathon, viewHackathons}