const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// let db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function(callback) {
//   console.log('Connection succeeded');
// });

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  full_name: {
    type: String,
    unique: true
  },   ///repo name
  forks: Number,
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


module.exports.save = save;

//Model.update(query, { name: 'jason bourne' }, options, callback);