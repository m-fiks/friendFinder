const path = require('path');

module.exports = (app) => {

//send survey to page
app.get('/survey', (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});

//grab survey results
app.post('/survey', (req, res) => {
    console.log(req.body)
})

};
