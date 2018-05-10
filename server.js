const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

app = express();

const PORT = 8080;

app.get('/', (req,res)=>{
    res.send('hello');
})

app.get('/survey', (req, res) =>{
    res.sendFile(path.join(__dirname, "/public/survey.html"))
})

app.listen(PORT, () =>{
    console.log(`server started at port: ${PORT}`)
})