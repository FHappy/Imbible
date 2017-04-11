var cocktails = require('./../controllers/cocktail.controller.js');
var seeds = require('./../db/seeds.js');

module.exports = function(app) {
  app.route('/api/cocktails/seeds')
     .get(seeds);

  app.route('/api/cocktails')
     .get(cocktails.loadAll);

  app.route('/api/cocktails/search')
  	 .get(cocktails.searchCocktails);

  app.route('/api/cocktails/:cocktailId')
  	 .get(cocktails.loadCocktail)
     .patch(cocktails.editCocktail);

  app.route('/api/cocktails/new')
     .post(cocktails.addCocktail);

}
