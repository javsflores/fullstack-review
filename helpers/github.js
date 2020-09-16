const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

    let options = {
      method: 'get',
      url: `https://api.github.com/users/${username}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      }
    };

    axios(options)
    .then((response) => {
      // console.log(response.data[0])
      // return console.log(response);
      console.log('this worked');
      callback(null, response.data)
    })
    .catch((error) => {
      console.log('this did not work');
      callback(error, null)
    })




  // .error((response) => {
  //   return console.error(err)
  // }) // KEEP IN MIND



    // let options = {
  //   method: 'get',
  //   url: 'https://api.github.com/users/javsflores/repos',
  //   headers: {
  //     'User-Agent': 'request',
  //     'Authorization': `token`
  //   }
  // };



  // axios(options)
  // .then((response) => {
  //   console.log('this is response', response.data[0])
  // }) // KEEP IN MIND

}

module.exports.getReposByUsername = getReposByUsername;