angular
    .module('imbibleApp')
    .service('CocktailsService', CocktailsService);

CocktailsService.$inject = ['$http'];

function CocktailsService($http) {
    const self = this;

    self.loadAll = loadAll;
    self.loadCocktail = loadCocktail;
    self.search = search;


    function loadAll() {
        return $http.get('/api/cocktails');
    }

    function loadCocktail(cocktailId) {
        return $http.get('/api/cocktails/' + cocktailId);
    }

    function search(url) {
        return $http.get('/api/cocktails/search/' + url);
    }
}
