angular
    .module('imbibleApp')
    .service('CocktailsService', CocktailsService);

CocktailsService.$inject = ['$http'];

function CocktailsService($http) {
    const self = this;

    self.editCocktail = editCocktail;
    self.loadAll = loadAll;
    self.loadCocktail = loadCocktail;
    self.addCocktail = addCocktail;
    self.search = search;


    function editCocktail(cocktailId) {
        return $http.patch('/api/cocktails/' + cocktailId);
    }

    function loadAll() {
        return $http.get('/api/cocktails');
    }

    function loadCocktail(cocktailId) {
        return $http.get('/api/cocktails/' + cocktailId);
    }

    function addCocktail() {
        return $http.post('/api/cocktails/new');
    }

    function search(url) {
        return $http.get('/api/cocktails/search/' + url);
    }
    // function search(queryParams) {
    //     return $http.get('/api/cocktails/search/', {
    //       query: queryParams
    //     });
    // }
}
