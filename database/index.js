const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
  console.log('Connection succeeded');
});

let repoSchema = mongoose.Schema({
  user: String,  //username
  name: String,   ///repo name
  forks: Number,
  url: String        //svn url???
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;