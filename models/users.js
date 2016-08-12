var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//Create User Schema
var userSchema = mongoose.Schema({
  "name":{ 
      type: String,
      required: true
  },
  "email":{ 
      type: String,
      required: true
  },
  "password":{ 
      type: String,
      required: true
  },
  "admin":{ 
      type: Boolean,
      required: true
  },
  "superuser":{ 
      type: Boolean,
      required: true
  },
  "active":{ 
      type: Boolean,
      required: true
  }
});


userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};

userSchema.methods.isValidPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
};

module.exports.getUserById = function(userId, callback){
    User.findById(userId, callback);
};



