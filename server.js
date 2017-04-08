process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose              = require('./config/mongoose.js');
var express               = require('./config/express.js');
var db                    = mongoose();
var app                   = express();


var port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log('server slinging spicy data/views on port ' + port);
});

module.exports = app;
