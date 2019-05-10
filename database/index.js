const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  full_name: {
    type: String,
    unique: true
  },   ///repo name
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// This function should save a repo or repos to
// the MongoDB
let save = (err, repos) => {
  Repo.insertMany(repos, function(err) {
    if (err) {
    console.log(err)
    }
  });
}

let findAll = (object, callback) => {
  Repo.find(object, function(err, data) {
    if (err) {
      console.log(err);
    }
    callback(null, data);
  })
}


module.exports.save = save;
module.exports.findAll = findAll;

