CocktailsSearchTermsController.$inject = ['SearchFactory', '$scope'];

function CocktailsSearchTermsController(SearchFactory, $scope) {
    const vm = this;

    vm.terms = [];
    activate();

    function activate() {
        vm.terms = SearchFactory.terms;
    }

    $scope.$watch(function() {
        return SearchFactory.terms;
    }, function(newValue, oldValue) {
        SearchFactory.setTerms(newValue);
    });
}

module.exports = CocktailsSearchTermsController;
