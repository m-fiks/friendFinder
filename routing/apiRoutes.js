const path = require('path');
const bodyParser = require('body-parser');

const array = require('../data/friendos.js');
// console.log(array);

module.exports = (app) => {

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/survey', (req,res) => {
    res.send(array)
})

//get survey data
app.post('/api/survey', (req,res)=>{
   console.log(req.body);
})

};