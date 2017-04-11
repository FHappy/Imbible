var Cocktail = require('mongoose').model('Cocktail');

exports.loadAll = function(req, res, next) {
    Cocktail.find({})
        .exec(function(err, cocktails) {
            if (err) {
                res.json({
                    message: 'Could not find any cocktails due to : ' + err
                })
            };

            res.json({
                cocktails: cocktails
            });
        });
}

exports.loadCocktail = function(req, res, next) {
    var id = req.params.cocktailId;
    Cocktail.findById({_id: id})
        .exec(function(err, cocktail) {
            if (err) {res.json({message: 'Could not find that cocktail : ' + err})};

            res.json({cocktail: cocktail});
        });
}

exports.searchCocktails = function(req, res, next) {
    var queryArray = [];
    for (x in req.query) {
        queryArray.push(req.query[x]);
    }

    // res.json({queries: queryArray});
    var finalQuery = [];

    for (var i = 0; i < queryArray.length; i++) {
        var query = new RegExp(queryArray[i], 'i');
        //query is basically '/rum/i'
        finalQuery.push({
            'ingredients.ingredient': query
        });
    }

    Cocktail.find({$or: finalQuery})
    // Cocktail.find($or: {'ingredients.ingredient': query})
        .exec(function(err, orCocktails) {
            if (err) {res.json({message: err});}
            console.log('after finalQuery is constructed');
            Cocktail.find({$and: finalQuery})
                .exec(function(err, andCocktails) {
                    if (err) {res.json({message: err});}

                    res.json({
                      orCocktails: orCocktails,
                      andCocktails: andCocktails
                    });
                });
        });
};
