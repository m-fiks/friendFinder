const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

app = express();

const PORT = process.env.PORT || 8080;

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require the routes
require("./routing/htmlRoutes")(app);

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "/public/home.html"));
})

app.listen(PORT, () =>{
    console.log(`server started at port: ${PORT}`)
})