var Cocktail = require('mongoose').model('Cocktail');

exports.loadAll = function(req, res, next) {
    Cocktail.find({})
        .exec(function (err, cocktails) {
          if (err) {res.json({message: 'Could not find any cocktails due to : ' + err})};

          res.json({cocktails: cocktails});
        });
}
