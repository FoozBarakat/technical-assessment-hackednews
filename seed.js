var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function (data) {
  // your code here!
  data.forEach(story => {
    Stories.insertOne(story, (err, res) => {
      if (err) console.log('err', err);
      else {
        console.log('done!!!');
        console.log(res);
      }
    })
  });
};

seedDb(data);
