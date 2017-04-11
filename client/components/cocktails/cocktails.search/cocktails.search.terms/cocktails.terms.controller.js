CocktailsSearchTermsController.$inject = ['SearchFactory', '$scope', 'CocktailsService'];

function CocktailsSearchTermsController(SearchFactory, $scope, CocktailsService) {
    const vm = this;

    vm.terms = [];
    vm.removeTerm = removeTerm;

    activate();

    function activate() {
        vm.terms = SearchFactory.terms;
    }

    $scope.$watch(function() {
        return SearchFactory.terms;
    }, function(newValue, oldValue) {
        // SearchFactory.setTerms(newValue);
        vm.terms = SearchFactory.terms;
    });

    function removeTerm(term) {
        vm.terms = vm.terms.filter(x => x !== term);
        SearchFactory.setTerms(vm.terms);

        var searchUrl = SearchFactory.generateUrl();
        CocktailsService
            .search(searchUrl)
            .then(function resolve(response) {
                SearchFactory.setResults(response.data.orCocktails, response.data.andCocktails);
            });
    }

}

module.exports = CocktailsSearchTermsController;
