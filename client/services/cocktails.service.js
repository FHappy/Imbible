angular
    .module('imbibleApp')
    .service('CocktailsService', CocktailsService);

CocktailsService.$inject = ['$http'];

function CocktailsService($http) {
    const self = this;

    self.loadAll = loadAll;


    function loadAll() {
        return $http.get('/api/cocktails');
    }
}
