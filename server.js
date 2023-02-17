//import express
const express = require('express')
//const {UserLists} = require('./UserLists')
const userRoute = require('./Routes/UserRoute')
//init express 
const app = express()
const PORT = 5000;

//middleWare Auth
/* const AuthMiddleWare = (req,res,next)=>{
    const isConnected = true;
    if(isConnected){
        next()
    }
    else {
        res.send('You are not authorized!')
    }
}

app.use(AuthMiddleWare)

//define routeHandlers
 app.get('/',(req,res)=>{
   // res.send('<h1>hello this is a ws of express<h1/>')
   res.sendFile(__dirname+'/views/Home.html')
})

app.get('/Profile', AuthMiddleWare, (req,res)=>{
    res.sendFile(__dirname+'/views/Profile.html')
})

app.get('/CSS/Home.css', (req,res)=>{
    res.sendFile(__dirname+'/views/CSS/Home.css')
}) 

app.use(express.static(__dirname+'/views')) */

app.use(express.json())

//create EndPOints/API
app.use(userRoute)


//run on port
app.listen(PORT, err=> err? console.log(err) : console.log(`Server is running on ${PORT}...`))