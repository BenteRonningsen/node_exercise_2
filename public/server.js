const express = require('express')
const app = express()



//app.get('/', function (req, res) {
  //res.send('Hello World!')
//})

app.use(express.static(__dirname, + '/public'));

function randomGreeting(){
    
    var Greeting = 5;
    var randomCount = Math.round(Math.random() * (Greeting - 1)) + 1;
    var greeting = new Array();
    greeting[1] = "Hello";
    greeting[2] = "Hei";
    greeting[3] = "Hola";
    greeting[4] = "Halla";
    greeting[5] = "Good Day";
    
    return greeting[randomCount];

}



app.get('/hehe/:navn', function (req, res) {
  res.send(randomGreeting() + " " + req.params.navn)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})




