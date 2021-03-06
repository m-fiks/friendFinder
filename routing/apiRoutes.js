const path = require('path');
const bodyParser = require('body-parser');

let friendArray = require('../data/friendos.js');
// console.log(friendArray);

module.exports = (app) => {

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/friends', (req,res) => {
    res.send(friendArray)
})

//get survey data
app.post('/api/survey', (req,res)=>{
   let userInput = req.body;
   
   //target questions and convert to integers
   let userResp = userInput.questions;
   
   let bestMatch = {
    matchName : "",
    matchPhoto : "",
    totalDifference : 100
   }
   

   //iterate thru friends array
   for (let i=0; i<friendArray.length; i++){
       //console.log(friendArray[i])
       let diff = 0;

       for (let j = 0; j < userResp.length; j++){
           //get absolute value of diff between each question compared to userresp
           diff += Math.abs(friendArray[i].questions[j] - userResp[j] )
       }

       if (diff < bestMatch.totalDifference){
           //set total diff and set matchname and photo to best match
           bestMatch.totalDifference = diff;
           bestMatch.matchName = friendArray[i].name;
           bestMatch.matchPhoto = friendArray[i].photo;
       }
   }
   
    friendArray.push(userInput);

    //send back match
    res.json(bestMatch)
})

};
