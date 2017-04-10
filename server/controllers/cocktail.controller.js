var Cocktail = require('mongoose').model('Cocktail');

exports.loadAll = function(req, res, next) {
    Cocktail.find({})
        .exec(function (err, cocktails) {
          if (err) {res.json({message: 'Could not find any cocktails due to : ' + err})};

          res.json({cocktails: cocktails});
        });
}

exports.loadCocktail = function(req, res, next) {
	Cocktail.findById(req.params.id)
		.exec(function (err, cocktail) {
			if (err) {res.json({message: 'Could not find that cocktail : ' + err})};

			res.json({cocktail: cocktail});
		}).select('-__v');
}

