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

let save = (repo) => {

  repo.save(err, repo) {
    if (err) {
      return console.error(err);
    }
    console.log(repo.RepoName);
    // return;
  }
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}
module.exports.save = save;