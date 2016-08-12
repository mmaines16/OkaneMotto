var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/okanemotto');

var db = mongoose.connection;

mongoose.model('users', {
  "name": String,
  "email": String,
  "password": String,
  "admin": Boolean,
  "superuser": Boolean,
  "active": Boolean,
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model('users').find(function(err, users){
    res.send(users);
  });
});

module.exports = router;
