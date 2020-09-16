const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const helper = require('../helpers/github.js');
const db = require('../database/index.js');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  console.log('received a post request', req.body.username);

  helper.getReposByUsername(req.body.username, (err, response) => {
    if (err) {
      console.log('DID NOT WORK');
      return res.status(404).send();
    }
    db.save(response);
    // console.log('ITS WORKING: ', response)
    return res.status(200).send();
  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.find((err, response) => {
    if (err) {
      console.log('didnt work');
      return res.status(404).send('Nothing to return');
    }
    console.log('it did work');
    return res.status(200).send('you got some data! ');
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});