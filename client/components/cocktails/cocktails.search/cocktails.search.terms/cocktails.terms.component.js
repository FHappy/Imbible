const controller            = require('./cocktails.terms.controller.js');
const template              = require('./cocktails.terms.html');

const CocktailsSearchTermsComponent = {
    controller: controller,
    template: template
};

angular
    .module('imbibleApp')
    .component('terms', CocktailsSearchTermsComponent);
