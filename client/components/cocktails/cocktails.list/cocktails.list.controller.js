CocktailsListController.$inject = ['CocktailsService', '$stateParams'];

function CocktailsListController(CocktailsService, $stateParams) {
    const vm = this;

    vm.cocktails = [];

    activate();

    function activate() {
        loadAllCocktails();
    }

    function loadAllCocktails() {
        CocktailsService
            .loadAll()
            .then(function resolve(response) {
                vm.cocktails = response.data.cocktails;
            });
    }
}

module.exports = CocktailsListController;
