var cocktails = require('./../controllers/cocktail.controller.js');
var seeds = require('./../db/seeds.js');

module.exports = function(app) {
  app.route('/api/cocktails/seeds')
     .get(seeds);
}
