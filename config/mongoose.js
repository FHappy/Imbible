var config                  = require('./config.js');
var mongoose                = require('mongoose');

module.exports = function() {
    mongoose.Promise = global.Promise;
    // will put in mongodbURI in config file later
    mongoose.connect(config.db);
    var db = mongoose.connection;

    //require our models here

    db.on('error', function(err) {
        console.log(err);
    });

    db.once('open', function() {
        console.log('database is connected now.');
    });

    return db;
}
