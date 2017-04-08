var Cocktail                          = require('mongoose').model('Cocktail');
var request                           = require('xhr-request');
var mongoose                          = require('mongoose');

module.exports = function(req, res, next) {
  request
      ('https://raw.githubusercontent.com/teijo/iba-cocktails/master/recipes.json', {
          json: true
      }, function(err, data) {
          if (err) {throw err;}

          var cocktails = data;
          console.log(cocktails);
          console.log('cocktails array lenght is: ' + cocktails.length);

          // for (cocktail of cocktails) {
          //
          // }
          for (var i = 0; i < cocktails.length; i++) {
              var newCocktail = new Cocktail({
                  createdBy: 'IBA',
                  name: cocktails[i].name,
                  preparation: cocktails[i].preparation,
                  category: cocktails[i].category,
                  glass: cocktails[i].glass,
                  garnish: cocktails[i].garnish,
                  ingredients: cocktails[i].ingredients
            });

            newCocktail.save(function(err) {
              if (err) {console.log(err);}
            });
          }
      });

      res.redirect('/');
}
