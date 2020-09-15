const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
// const request = require('request');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  console.log('received a post request', req.body.username);

  // axios.get('https://api.github.com/users/javsflores/repos')
  // .then((response) => {
  //   console.log('this is response', response.data[0].owner)
  // }) // KEEP IN MIND

  res.json('hello')
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});