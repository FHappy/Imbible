var mongoose                = require('mongoose');
var Schema                  = mongoose.Schema;

var CocktailSchema = new Schema({
  createdBy: String,
  name: String,
  preparation: String,
  category: String,
  glass: String,
  garnish: String,
  ingredients: Array,
  // reviews:
  img: String
});

mongoose.model('Cocktail', CocktailSchema);
