const express = require('express');
const bodyParser = require('body-parser');
const github = require('../helpers/github');
const request = require('request');
const repos = require('../database/index.js')
let app = express();


//***Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.static(__dirname + '/../client/dist'));




// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function (req, res) {
  let username = req.body.username;
  github.getReposByUsername(username, function(err, response, body) {
    if (err) {
      console.log('error getting data from github', err)
    }
    let data = JSON.parse(body)
    repos.save(null, data);
    res.end();
  });
  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

