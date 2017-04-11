CocktailsSearchAllController.$inject = ['SearchFactory', '$scope'];

function CocktailsSearchAllController(SearchFactory, $scope) {
    const vm = this;

    vm.allResults = [];

    activate();

    function activate() {
        vm.allResults = SearchFactory.allResults;
    }

    $scope.$watch(function() {
            return SearchFactory.allResults;
        },
        function(newValue, oldValue) {
            vm.allResults = newValue;
        });
}

module.exports = CocktailsSearchAllController;
