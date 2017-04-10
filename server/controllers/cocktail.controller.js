var Cocktail = require('mongoose').model('Cocktail');

exports.loadAll = function(req, res, next) {
    Cocktail.find({})
        .exec(function (err, cocktails) {
          if (err) {res.json({message: 'Could not find any cocktails due to : ' + err})};

          res.json({cocktails: cocktails});
        });
}

exports.loadCocktail = function(req, res, next) {
  var id = req.params.cocktailId;
	Cocktail.findById({_id: id})
		.exec(function (err, cocktail) {
			if (err) {res.json({message: 'Could not find that cocktail : ' + err})};

			res.json({cocktail: cocktail});
		});
}

exports.searchCocktails = function (req, res, next) {

  res.json({query1: req.query.query1,
    query2: req.query.query2});

  // var finalQuery = [];

  // for (var i = 0; i < req.params.query.length; i++) {
  //   var query = new RegExp(req.params.query[i], 'i');
  //   finalQuery.push({ingredients.ingredient: query});
  // }

}