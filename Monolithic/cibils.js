let scores = [540,800,750,450,810,650]

// Personal Loan>> 700
const findForPL = () => {
    const pls = scores.filter((data,pos)=>{
        return data>=700
    })
    console.log(pls)
}

const findMaxs = (top) => {
    console.log(scores.sort().reverse().slice(0,top))
}

// findForPL()
findMaxs(5)