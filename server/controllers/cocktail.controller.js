var Cocktail = require('mongoose').model('Cocktail');

exports.loadAll = function(req, res, next) {
    Cocktail.find({})
        .exec(function(err, cocktails) {
            if (err) {
                res.json({
                    message: 'Could not find any cocktails due to : ' + err
                });
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

exports.addCocktail = function(req, res, next) {

    var cocktail = new Cocktail(req.body);

    cocktail.save(function(err) {
        if (err) res.json({message: 'Could not create cocktail b/c:' + err});

        res.json({cocktail: cocktail});
    });
}

exports.editCocktail = function(req, res, next) {

    var id = req.params.cocktailId;

    Cocktail.findById({_id: id}, function(err, cocktail) {
        if (err) {res.json({message: 'Could not find that cocktail : ' + err})};
        if (req.body.createdBy) cocktail.createdBy = req.body.createdBy;
        if (req.body.name) cocktail.name = req.body.name;
        if (req.body.preparation) cocktail.preparation = req.body.preparation;
        if (req.body.category) cocktail.category = req.body.category;
        if (req.body.glass) cocktail.glass = req.body.glass;
        if (req.body.garnish) cocktail.garnish = req.body.garnish;
        if (req.body.ingredients) cocktail.ingredients = req.body.ingredients;
        if (req.body.reviews) cocktail.reviews = req.body.reviews;
        if (req.body.img) cocktail.img = req.body.img;

        cocktail.save(function(err) {
            if(err) res.json({messsage: 'Could not update cocktail b/c:' + err});

            res.json({message: 'Cocktail successfully updated'});
        });
    });

}

exports.searchCocktails = function(req, res, next) {
    var queryArray = [];
    for (x in req.query) {
        queryArray.push(req.query[x]);
    }

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
