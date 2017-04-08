var mongoose                = require('mongoose');
var Schema                  = mongoose.Schema;

var ReviewSchema = new Schema({
    reviewer: String,
    rating: Number
});

var CocktailSchema = new Schema({
    createdBy: String,
    name: String,
    preparation: String,
    category: String,
    glass: String,
    garnish: String,
    ingredients: Array,
    reviews: [ReviewSchema],
    img: String
});

mongoose.model('Review', ReviewSchema);
mongoose.model('Cocktail', CocktailSchema);
