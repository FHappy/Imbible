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


    function editCocktail(cocktail) {
        return $http.patch('/api/cocktails/' + cocktail._id, cocktail);
    }

    function loadAll() {
        return $http.get('/api/cocktails');
    }

    function loadCocktail(cocktailId) {
        return $http.get('/api/cocktails/' + cocktailId);
    }

    function addCocktail(newCocktail) {
        return $http.post('/api/cocktails/new', newCocktail);
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
