const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app) => {

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//send survey page
app.get('/survey', (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});


};
