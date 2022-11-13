const express = require('express') //since i know im using express for this App, i am going to make sure we have access to express
const app = express()//storing express in 'app' variable. 'app' can just use all methods that come with express
const PORT = 8000
/*first thing we do is setup server to hear request and respond*/
const cors = require('cors')

app.use(cors())

const rappers = {
    '21 savage':{
        'age':29,
    'birthName':'bob',
    'birthLocation':'london',
    },
    'chance the rapper':{
        'age':28,
    'birthName':'steve',
    'birthLocation':'chicago',
    },
    'dylan':{
        'age':28,
    'birthName':'dylan',
    'birthLocation':'dylan',
    },
}
//app.get is the request when when users go to main url(it's always '/'), .get is a method that comes with express
//serving up HTML(located in notes)
//you will always see request, response
//when app.get hears the network request, it fires what's inside
app.get('/', (request, response)=>{
//our response is going to be to send file, our main index.html file
//__dirname tells our server where to look to get index.html file
    response.sendFile(__dirname + '/index.html')


})
//serving up JSON(in notes)
//since they are requesting API, we respond with JSON (response.json)
//after the slash put':' for query parameter
app.get('/api/:rapperName', (request, response)=>{
//whenever a request comes in, if their is rapperName after the slash. i can grab it with request.params,rapperName
//store in variable
    const rappersName = request.params.rapperName.toLowerCase()
//if the object 'rappers' has a proprtery of 'rappersName' (what we get from the url)
console.log(rappers[rappersName])
console.log(rappers['dylan'])
    if(rappers[rappersName]){
        //we respond with that 'rappersName' listed in the 'rappers' object listed above
        response.json(rappers[rappersName])

    }
    else{
        response.json(rappers['dylan'])
    }
})
//telling the app to listen for our app.get request on our PORT
//if it hears the rquest, it will display on our PORT
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`the server is running on ${PORT}`)
})