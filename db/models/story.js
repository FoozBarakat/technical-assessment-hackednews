var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: String,
  title: String,
  score: Number
});

var StoryModel = mongoose.model('Story', storySchema);

// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}, callback);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({ id: id }, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
  var newStory = new StoryModel({
    id: story.id,
    by: story.by.id,
    title: story.title,
    score: story.score
  })
  newStory.save((err, s) => {
    if (err) console.log('err', err);
    else {
      console.log('sent!!');
    }
  });
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;


