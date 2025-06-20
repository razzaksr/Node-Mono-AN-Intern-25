// prime operations
const isPrime = (value) =>{
    return (value==2||value==3||value==5||value==7||value%2!=0&&value%3!=0&&value%5!=0&&value%7!=0)?true:false
}

const viewPrimesInRange = (begin,end) =>{
    while(begin<=end){
        if(begin==2||begin==3||begin==5||begin==7||begin%2!=0&&begin%3!=0&&begin%5!=0&&begin%7!=0)
            console.log(begin)
        begin++
    }
}

module.exports = {isPrime, viewPrimesInRange}