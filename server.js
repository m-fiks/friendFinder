const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

app = express();

const PORT = 8080;

app.listen(PORT, () =>{
    console.log(`server started at port: ${PORT}`)
})