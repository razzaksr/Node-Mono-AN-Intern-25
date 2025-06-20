const exprees = require('express')

// creater backend server/ api
const app = exprees()

// routings
app.get('/',async(request,response)=>{
    return response.json("Welcome to Zealous Intern Connect")
})
app.get('/hi',async(req,res)=>{
    return res.json("monolithic is easy implementation")
})

app.listen(9090,async()=>{
    console.log("my api is running!!!!!!!!")
})

