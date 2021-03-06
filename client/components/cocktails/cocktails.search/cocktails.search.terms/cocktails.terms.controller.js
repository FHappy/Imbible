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
        SearchFactory.setTerms(newValue);
        vm.terms = SearchFactory.terms;
    });

    function removeTerm(removedTerm) {
        vm.terms = vm.terms.filter(term => term !== removedTerm);
        SearchFactory.setTerms(vm.terms);

        var searchUrl = SearchFactory.generateUrl();
        console.log('boolean value of searchUrl is ');
        if (searchUrl) {console.log(searchUrl);};
        if (vm.terms.length !== 0) {
          CocktailsService
              .search(searchUrl)
              .then(function resolve(response) {
                  SearchFactory.setResults(response.data.orCocktails, response.data.andCocktails);
              });
        } else {
          SearchFactory.setResults([], []);
        }

    }

}

module.exports = CocktailsSearchTermsController;
