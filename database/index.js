const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  GitHub_Id: Number,
  RepoName: String,
  Owner: String,
  URL: String,
  Description: String,
  Forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {

  repos.map((repo) => {
    var item = {
      GitHub_Id: repo.id,
      RepoName: repo.name,
      Owner: repo.owner.login,
      URL: repo.html_url,
      Description: repo.description,
      Forks: repo.forks_count
    }

    var newRepo = new Repo(item);
    newRepo.save(function (err) {
      if (err) return handleError(err);
      console.log('it worked');
    })
  })

}

let find = (callback) => {
  Repo.find(function (err, repo) {
    if (err) return callback('did not work', null);
    repo.map((rep) => {console.log('this is it: ', rep._doc)})
    callback(null, 'it did work')
  })
}
module.exports.save = save;
module.exports.find = find;