const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app) => {

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/survey', (req,res) => {
    res.send('hello')
})

//get survey data
app.post('/api/survey', (req,res)=>{
   console.log(req.body);
})

};