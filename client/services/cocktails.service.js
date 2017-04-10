angular
    .module('imbibleApp')
    .service('CocktailsService', CocktailsService);

CocktailsService.$inject = ['$http'];

function CocktailsService($http) {
    const self = this;

    self.loadAll = loadAll;
    self.loadCocktail = loadCocktail;


    function loadAll() {
        return $http.get('/api/cocktails');
    }

    function loadCocktail(cocktailId) {
    	return $http.get('/api/cocktails/' + cocktailId);
    }


}
