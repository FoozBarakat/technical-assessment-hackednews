var express = require('express');
var storyController = require('../../db/models/story.js');

var router = express.Router();

router.route('/')
  .get(function (req, res) {
    // TODO: Replace this with stories you've retrieved from the database
    storyController.findAll((error, data) => {
      if (error) throw error;
      else {
        console.log('here!');
        res.send(data);
      }
    });
  });

// Here we use express's route params
router.route('/:id')
  .get(function (req, res) { });

module.exports = router;
