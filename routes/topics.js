var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /topics

// GET /topics
router.get('/', function(req, res, next) {
   // Hae kaikki aihealueet tässä (Vinkki: findAll)
  Models.Topic.findAll().then(function(Topic){
    res.json(Topic);
  });
});

// GET /topics/:id
router.get('/:id', function(req, res, next) {
  // Hae aihealue tällä id:llä tässä (Vinkki: findOne)
  var topicId = req.params.id;
    Models.Topic.findOne({ 
      where: { 
        id: topicId 
      },
      include: { model: Models.Message,
        include:{ model: Models.User}  
      }
    }).then(function(Topic){
      console.log("poo");
      res.json(Topic);
  });
  
});

// POST /topics
router.post('/', authentication, function(req, res, next) {
  // Lisää tämä aihealue
  var topicToAdd = req.body;
  // Palauta vastauksena lisätty aihealue
  Models.Topic.create({
    name: topicToAdd.name,
    description: topicToAdd.description,
    include: { model: Models.Message }
  }).then(function(topic){
    console.log('aihe on lisätty tietokantaan onnistuneesti!');
    res.json(topic);
  });
  
});

// POST /topics/:id/message
router.post('/:id/message', authentication, function(req, res, next) {
  // Lisää tällä id:llä varustettuun aihealueeseen...
  var topicId = req.params.id;
  var messageBody = req.body;
  
  var messageToAdd = {
    TopicId: topicId,
    UserId: req.session.userId,
    title: messageBody.title,
    content: messageBody.content
  };
  
  Models.Message.create(messageToAdd).then(function(message){
    res.send(message);
  });
});

module.exports = router;