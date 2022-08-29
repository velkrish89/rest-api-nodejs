const express = require('express');
const bodyParser = require('body-parser');


//Set up the express app
const app = express();

app.use(bodyParser.json());

//Initialize routes
app.use('/api', require('./routes/api'));

//Listen for request
app.listen(process.env.port || 3000, function(){
    console.log("Now listening for the incoming requests");
});