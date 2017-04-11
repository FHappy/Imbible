CocktailsSearchEitherController.$inject = ['SearchFactory', '$scope'];

function CocktailsSearchEitherController(SearchFactory, $scope) {
    const vm = this;
    vm.fullName = 'either controller';

    vm.eitherResults = [];

    activate();

    function activate() {
        vm.eitherResults = SearchFactory.eitherResults;
    }

    $scope.$watch(function() {
        return SearchFactory.eitherResults;
    },
    function(newValue, oldValue) {
        vm.eitherResults = newValue;
    });
}

module.exports = CocktailsSearchEitherController;
