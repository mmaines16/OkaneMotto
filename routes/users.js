var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/okanemotto');

var db = mongoose.connection;

User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.getUsers(function(err, users){
    if(err){
      throw err;
    }
    
    res.json(users);
  });
});

router.get('/test/password/:_id', function(req, res, next){
  User.getUserById(req.params._id, function(err, user){
    
    console.log(user);
    if(err){
      throw err;
    }
    
    console.log(user.generateHash('1001Nash*'));
    
    res.json(user);
  });
});

module.exports = router;
