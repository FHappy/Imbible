CocktailsSearchTermsController.$inject = ['SearchFactory', '$scope'];

function CocktailsSearchTermsController(SearchFactory, $scope) {
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
        vm.terms = vm.terms.filter(x => x!== term);
        SearchFactory.setTerms(vm.terms);
    }

}

module.exports = CocktailsSearchTermsController;
