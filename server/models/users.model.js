var mongoose                = require('mongoose');
var Schema                  = mongoose.Schema;
var crypto                  = require('crypto');
var jwt                     = require('jsonwebtoken');
var config                  = require('./../../config/config.js');

var UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    img: String,
    bio: String,
    hash: String,
    salt: String
});

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var newHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === newHash;
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, config.sessionSecret);
};

mongoose.model('User', UserSchema);
