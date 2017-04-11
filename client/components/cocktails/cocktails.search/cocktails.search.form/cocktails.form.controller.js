CocktailsFormController.$inject = ['CocktailsService', '$stateParams', '$scope', 'SearchFactory'];

function CocktailsFormController(CocktailsService, $stateParams, $scope, SearchFactory) {
    const vm = this;

    vm.coctails = [];
    vm.search = search;
    activate();

    function activate() {
        SearchFactory.terms = [];
    };

    function search(newSearchTerm) {
        console.log('search term is ' + newSearchTerm);
        SearchFactory.terms.push(newSearchTerm);
        var allSearchTerms = SearchFactory.terms;
        var searchUrl = '?';
        for (var i = 0; i < allSearchTerms.length; i++) {
            console.log('search i is ' + i);
            searchUrl += 'q' + i + '=' + allSearchTerms[i];
            if (i !== allSearchTerms.length - 1) {
              searchUrl += '&';
            }
        }
        CocktailsService
            .search(searchUrl)
            .then(function resolve(response) {
              // update factory values, so it will change other components
                SearchFactory.eitherResults = response.data.orCocktails;
                SearchFactory.allResults = response.data.andCocktails;
                console.log(SearchFactory.terms);
                console.log(SearchFactory.eitherResults);
                console.log(SearchFactory.allResults);
            }, function reject(response) {
                return ({message: 'No results found.'});
            });
    }


}

module.exports = CocktailsFormController;
