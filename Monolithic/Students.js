let learners = [
    {
        "name": "Sriram",
        "regno": "25D001",
        "dept": "AIML"
    },
    {
        "name": "Vikram",
        "regno": "22D0121",
        "dept": "CSE"
    },
    {
        "name": "Lavanya",
        "regno": "21DC03",
        "dept": "CSBS"
    }
]

// console.log(learners[0].dept)
// console.log(learners[0]['dept'])

console.log(
    learners.filter((val,ind)=>{
        return !val.dept.startsWith("CS")
    })
)
